#!/usr/bin/env bash
set -euo pipefail

# Download all published dev.to articles into content/posts/*.md
# Requires: curl, jq, and DEVTO_API_KEY (loaded from .env)

if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if [[ -z "${DEVTO_API_KEY:-}" ]]; then
  echo "error: DEVTO_API_KEY is not set" >&2
  exit 1
fi

OUT_DIR="content/posts"
SITE_URL="${SITE_URL:-https://www.navinkodag.com}"
API="https://dev.to/api"
HEADERS=(-H "api-key: ${DEVTO_API_KEY}" -H "accept: application/vnd.forem.api-v1+json")

mkdir -p "$OUT_DIR"

echo "Fetching articles from dev.to..."
ARTICLES=$(curl -fsS --retry 3 "${HEADERS[@]}" "$API/articles/me?per_page=1000")

COUNT=$(echo "$ARTICLES" | jq 'length')
echo "Found ${COUNT} articles"

yaml_str() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

echo "$ARTICLES" | jq -c '.[]' | while read -r article; do
  SLUG=$(echo "$article" | jq -r '.slug')
  TITLE=$(echo "$article" | jq -r '.title // ""')
  DESC=$(echo "$article" | jq -r '.description // ""')
  DATE=$(echo "$article" | jq -r '.published_at // ""')
  COVER=$(echo "$article" | jq -r '.cover_image // ""')
  READTIME=$(echo "$article" | jq -r '.reading_time_minutes // 1')
  TAGS_JSON=$(echo "$article" | jq -c '.tag_list // []')
  BODY=$(echo "$article" | jq -r '.body_markdown // ""')

  # Fallback: fetch the full article if body_markdown was empty
  if [[ -z "$BODY" ]]; then
    BODY=$(curl -fsS "${HEADERS[@]}" "$API/articles/100lvlmaster/${SLUG}" | jq -r '.body_markdown // ""' || true)
  fi

  FILE="$OUT_DIR/${SLUG}.md"

  {
    echo "---"
    echo "title: \"$(yaml_str "$TITLE")\""
    echo "description: \"$(yaml_str "$DESC")\""
    echo "slug: \"$SLUG\""
    echo "publishedAt: \"$DATE\""
    [[ -n "$COVER" ]] && echo "coverImage: \"$COVER\""
    echo "readingTime: $READTIME"
    echo "canonicalUrl: \"$SITE_URL/blog/$SLUG\""
    if [[ "$TAGS_JSON" != "[]" ]]; then
      echo "tags:"
      echo "$TAGS_JSON" | jq -r '.[]' | sed 's/^/  - /'
    fi
    echo "---"
    echo
    printf '%s\n' "$BODY"
  } > "$FILE"

  echo "  wrote ${FILE}"
done

echo "Done. Articles saved to ${OUT_DIR}/"

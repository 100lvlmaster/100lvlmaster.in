import axios, { AxiosResponse } from "axios";

export const fetchArticles = async () =>
  await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40100lvlmaster"
  );

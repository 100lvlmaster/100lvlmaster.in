import { useEffect } from "react";
import useSWR from "swr";
import { Text } from "@chakra-ui/react";
import { articleBySlug } from "../lib/devto";
import { fetcher } from "../lib/fetcher";
import { Views } from "../lib/types";

interface Props {
  slug: string;
  shouldRegisterView?: boolean;
}

const ViewCounter = ({ slug, shouldRegisterView = false }: Props) => {
  const { data, error } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  useEffect(() => {
    if (!shouldRegisterView) {
      return;
    }
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);
  return (
    <Text>{`${
      (data?.count ?? 0) > 0 ? data!.count.toLocaleString() : "–––"
    } views`}</Text>
  );
};
export default ViewCounter;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await articleBySlug(params.slug);
  return { props: { post }, revalidate: 21600 };
}

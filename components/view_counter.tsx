import fetcher from "lib/fetcher";
import { Views } from "lib/types";
import { useEffect } from "react";
import useSWR from "swr";

interface Props {
  slug: string;
}

const ViewCounter = ({ slug }: Props) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);
  return (
    <span>{`${
      (data?.count ?? 0) > 0 ? data.count.toLocaleString() : "–––"
    } views`}</span>
  );
};
export default ViewCounter;

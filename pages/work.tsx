import { Container } from "../components/container";
import { fetchArticles } from "../lib/medium";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
const WorkPage = () => {
  //
  const [isMounted, setMounted] = useState(false);
  const [articles, setArticles] = useState<AxiosResponse>();

  //
  const loadArticles = async () => {
    setArticles(await fetchArticles());
    setMounted(true);
  };

  //
  useEffect(() => {
    loadArticles();
  }, []);
  return (
    <div>
      <Container className="flex flex-col">
        <div className="flex  flex-col">
          <h2>Side projects</h2>
          <h2>Articles</h2>
          <ul>
            {isMounted
              ? articles.data.items.map((item: any, key: number) => (
                  <li key={key}>
                    <a href={item.guid} target="_blank_">
                      <div className="pt-5 pb-5">
                        <img
                          key={key}
                          src={item.thumbnail}
                          className="rounded"
                          alt={`thumbnail-${item.thumbnail}`}
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {item.title}
                        </span>
                      </div>
                    </a>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default WorkPage;

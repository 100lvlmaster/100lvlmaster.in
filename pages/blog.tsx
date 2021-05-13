import { Container } from "../components/container";
import { fetchArticles } from "../lib/medium";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { PulseLoader } from "../components/loader_pulse";
const BlogPage = () => {
  //
  const [isMounted, setMounted] = useState(false);
  const [articles, setArticles] = useState<AxiosResponse>();

  //
  const loadArticles = async () => {
    setArticles(await fetchArticles());
    setMounted(true);
  };

  //
  ///adasdad

  useEffect(() => {
    loadArticles();
  }, []);
  return (
    <div>
      <Container className="flex flex-col">
        <div className=" flex  flex-col">
          <h2 className="font-bold text-xl">Articles</h2>
          {isMounted ? (
            <ul className="flex flex-col py-5 justify-items-start">
              {articles.data.items.map((item: any) => (
                <ArticleCard
                  key={item.guid}
                  href={item.guid}
                  title={item.title}
                  description={""}
                  imgUrl={item.thumbnail}
                />
              ))}
            </ul>
          ) : (
            <div className="lg:grid grid-cols-2 lg:px-2 py-5 justify-items-start">
              <PulseLoader className="h-40 w-40" />
              <PulseLoader className="h-5" />
              <PulseLoader className="h-5" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
const ArticleCard = ({ title, imgUrl, description, href }) => (
  <a
    className="border border-gray-200 dark:border-gray-800 m-1 rounded hover:shadow-md text-sm my-1 p-2"
    rel="noreferrer"
    href={href}
    target="_blank_"
  >
    <div className="flex flex-row">
      <div className="flex-grow flex flex-col py-3">
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <img className=" w-20 object-cover	" src={imgUrl} alt={`${imgUrl}.png`} />
    </div>
  </a>
);

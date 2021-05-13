import { Container } from "../components/container";
import { fetchArticles } from "../lib/medium";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
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
          <ul className="flex flex-col py-5 items-stretch">
            {isMounted
              ? articles.data.items.map((item: any) => (
                  <ArticleCard
                    key={item.guid}
                    href={item.guid}
                    title={item.title}
                    description={""}
                    imgUrl={item.thumbnail}
                  />
                ))
              : [1, 2, 3].map((item) => <PulseLoader key={item} />)}
          </ul>
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
      <div className="flex-grow flex flex-col p-3 overflow-ellipsis	">
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <img
        className="h-16 w-16 object-cover"
        src={imgUrl}
        alt={`${imgUrl}.png`}
      />
    </div>
  </a>
);
const PulseLoader = () => {
  const loader: string = " animate-pulse bg-gray-400  rounded my-2";
  return (
    <div className="border border-gray-200 dark:border-gray-800 m-1 rounded hover:shadow-md text-sm my-1 p-2">
      <div className="flex flex-row space-x-2">
        <div className={"h-5 w-80".concat(loader)}>{}</div>
        <div className={"h-16 w-16".concat(loader)}></div>
      </div>
    </div>
  );
};

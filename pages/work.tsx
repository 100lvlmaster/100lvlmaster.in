import { Container } from "../components/container";
import { fetchArticles } from "../lib/medium";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { PulseLoader } from "../components/loader_pulse";
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
          <div>
            <ul>
              <li>
                <a href={""} target="_blank_">
                  <div className="pt-5 pb-5">
                    <img
                      src={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                      className="rounded w-auto h-20"
                      alt={`thumbnail-maymay.png`}
                    />
                    <div className="text-sm flex flex-row py-4 text-gray-600 dark:text-gray-400">
                      <div className="flex flex-col">
                        <span
                          className={`text-xl dark:text-white text-gray-700 `}
                        >{`Maymay`}</span>
                        <span>{`maymay is an open source flutter app made to spawn random memes from reddit and have the user scroll through them as if a social media app but purely for memes.`}</span>
                      </div>
                      <div className="px-3 self-start">
                        <svg
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <h2>Articles</h2>
          {isMounted ? (
            <ul>
              {articles.data.items.map((item: any, key: number) => (
                <li key={item.guid + key}>
                  <a href={item.guid} target="_blank_">
                    <div className="pt-5 pb-5">
                      <img
                        src={item.thumbnail}
                        className="rounded"
                        alt={`thumbnail-${item.thumbnail}`}
                      />
                      <div className="text-sm flex flex-row py-4 text-gray-600 dark:text-gray-400">
                        {item.title}
                        <div className="px-3 self-start">
                          <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-stretch	">
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
export default WorkPage;

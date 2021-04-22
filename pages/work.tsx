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
              <Card
                href="https://github.com/100lvlmaster/youtube_metadata"
                key={`https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png`}
                title={`Youtube Metadata`}
                thumbnailSize={"h-28 w-25"}
                thumbnail={`https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png`}
                description={`A flutter package to fetch a videos metadata from the link using the oembed API`}
              />{" "}
              <Card
                href="https://github.com/100lvlmaster/maymay"
                key={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                title={`Maymay v2`}
                thumbnailSize={"h-28 w-25"}
                thumbnail={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                description={`maymay is an open source flutter app made to spawn random memes from reddit and have the user scroll through them as if a social media app but purely for memes.`}
              />
              <Card
                href="https://github.com/100lvlmaster/stacked_page_view"
                key={`https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png`}
                title={`Stacked page view`}
                thumbnailSize={"h-28 w-28"}
                thumbnail={`https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png`}
                description={`A Flutter pacakge that provides vertical pageview carousel in flutter`}
              />
            </ul>
          </div>
          <h2>Articles</h2>
          {isMounted ? (
            <ul>
              {articles.data.items.map((item: any) => (
                <Card
                  key={item.guid}
                  href={item.guid}
                  description={item.title}
                  thumbnail={item.thumbnail}
                />
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

const Card = (props) => {
  return (
    <li key={props.guid}>
      <a rel="noreferrer" href={props.href} target="_blank_">
        <div className="pt-5 pb-5">
          <img
            src={props.thumbnail}
            className={"rounded ".concat(props.thumbnailSize)}
            alt={`${props.thumbnail}`}
          />
          <div className="text-sm flex flex-row py-4 text-gray-600 dark:text-gray-400">
            <div className={`flex flex-col flex-grow`}>
              <span className={`text-black dark:text-white text-lg`}>
                {props.title}
              </span>
              <span>{props.description}</span>
            </div>
            <div className="px-3 self-start">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

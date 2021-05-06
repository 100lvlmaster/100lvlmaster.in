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
  ///adasdad

  useEffect(() => {
    loadArticles();
  }, []);
  return (
    <div>
      <Container className="flex flex-col">
        <div className=" flex  flex-col">
          <h2>Side projects</h2>
          <div>
            <ul className="lg:grid grid-cols-2 lg:px-2 py-5 justify-items-start">
              <Card
                href="https://github.com/100lvlmaster/maymay"
                key={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                title={`Maymay v2`}
                thumbnailSize={"h-14 w-14 md:h-24 md:w-24"}
                thumbnail={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                description={`maymay is an open source flutter app made to spawn random memes from reddit and have the user scroll through them as if a social media app but purely for memes.`}
              />
              <Card
                href="https://github.com/100lvlmaster/stacked_page_view"
                key={`https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png`}
                title={`Stacked page view`}
                thumbnailSize={"h-14 w-14 md:h-24 md:w-24"}
                thumbnail={`https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png`}
                description={`A Flutter pacakge that provides vertical pageview carousel in flutter`}
              />
              <Card
                href="https://github.com/100lvlmaster/youtube_metadata"
                key={`https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png`}
                title={`Youtube Metadata`}
                thumbnailSize={"h-14 w-14 md:h-24 md:w-24"}
                thumbnail={`https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png`}
                description={`A flutter package to fetch a videos metadata from the link using the oembed API`}
              />
              <Card
                href="https://github.com/100lvlmaster/spotify_metadata"
                key={`https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png`}
                title={`Spotify Metadata`}
                thumbnailSize={"h-14 w-14 md:h-24 md:w-24"}
                thumbnail={`https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png`}
                description={`A flutter package to fetch a spotify song/playlist's metadata from the link using the oembed API`}
              />
              <Card
                href="https://github.com/100lvlmaster/one_for_all_theme"
                key={`https://raw.githubusercontent.com/100lvlmaster/one_for_all_theme/master/theme_logo.png`}
                title={`One for all`}
                thumbnailSize={"h-14 w-14 md:h-24 md:w-24"}
                thumbnail={`https://raw.githubusercontent.com/100lvlmaster/one_for_all_theme/master/theme_logo.png`}
                description={`VS code theme built using Atom's one dark pro color scheme with a minimal design and eye candy colors`}
              />
            </ul>
          </div>
          <h2>Articles</h2>
          {isMounted ? (
            <ul className="lg:grid grid-cols-2 lg:px-2 py-5 justify-items-start">
              {articles.data.items.map((item: any) => (
                <Card
                  key={item.guid}
                  href={item.guid}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  thumbnailSize={"lg:h-28 lg:w-auto"}
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
export default WorkPage;

const Card = (props) => {
  return (
    <li
      className={
        "border border-gray-200 dark:border-gray-800 m-2 rounded hover:shadow-md"
      }
      key={props.guid}
    >
      <a rel="noreferrer" href={props.href} target="_blank_">
        <div className="p-3">
          <img
            src={props.thumbnail}
            className={"rounded ".concat(props.thumbnailSize)}
            alt={`${props.thumbnail}`}
          />
          <div className="text-sm flex flex-row py-4 text-gray-600 dark:text-gray-400">
            <div className={`flex flex-col flex-grow`}>
              <span
                className={`text-black dark:text-white font-medium text-md`}
              >
                {props.title}
              </span>
              <span>{props.description}</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

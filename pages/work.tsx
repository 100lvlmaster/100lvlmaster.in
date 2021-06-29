import { Container, Spacer } from "../components/layouts/container";

const WorkPage = () => {
  return (
    <div>
      <Container className="flex flex-col">
        <div className=" flex  flex-col">
          <h2 className="font-bold text-xl">{"Projects"}</h2>
          <div>
            <ul className="grid grid-cols-1 lg:grid-cols-2 py-5 justify-items-stretch	">
              <Card
                href="https://github.com/100lvlmaster/the-intersect"
                title={`The intersect project`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvftboJ79mGZyKh1IztzFzVlmtwHThznQ3XDi20l10KHVnFH26PNpNCX_uEqRPgRGxuQ&usqp=CAU`}
                description={`An prototype weekend project inspired from the famous series "Chuck"`}
              />
              <Card
                href="https://github.com/100lvlmaster/Intersect_api"
                title={`Image search API`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://www.pngkit.com/png/detail/380-3801403_go-programming-language-logo-golang-logo-png.png`}
                description={`An API made with gin-gonic to scrape images from various sources`}
              />
              <Card
                href="https://github.com/100lvlmaster/maymay"
                title={`Maymay v2`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                description={`maymay is an open source flutter app made to spawn random memes from reddit and have the user scroll through them as if a social media app but purely for memes.`}
              />
              <Card
                href="https://github.com/100lvlmaster/time_tracker"
                title={`Time tracker`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://i.ibb.co/YR0H5pJ/play-store-logo.png`}
                description={`Todos and Note-taking in realtime with firebase.`}
              />
              <Card
                href="https://github.com/100lvlmaster/stacked_page_view"
                title={`Stacked page view`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png`}
                description={`A Flutter pacakge that provides vertical pageview carousel in flutter`}
              />
              <Card
                href="https://github.com/100lvlmaster/youtube_metadata"
                title={`Youtube Metadata`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png`}
                description={`A flutter package to fetch a videos metadata from the link using the oembed API`}
              />
              <Card
                href="https://github.com/100lvlmaster/spotify_metadata"
                title={`Spotify Metadata`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png`}
                description={`A flutter package to fetch a spotify song/playlist's metadata from the link using the oembed API`}
              />
              <Card
                href="https://github.com/100lvlmaster/one_for_all_theme"
                title={`One for all`}
                thumbnailSize={"h-14 w-14 md:h-22 md:w-22"}
                thumbnail={`https://raw.githubusercontent.com/100lvlmaster/one_for_all_theme/master/theme_logo.png`}
                description={`VS code theme built using Atom's one dark pro color scheme with a minimal design and eye candy colors`}
              />
            </ul>
          </div>
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
        "border border-gray-200 dark:border-gray-800 m-1 rounded hover:shadow-md text-xs"
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
          <div className=" flex flex-row py-4 text-gray-600 dark:text-gray-400">
            <div className={`flex flex-col text-xs flex-grow`}>
              <span
                className={`text-black dark:text-white font-medium text-lg`}
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

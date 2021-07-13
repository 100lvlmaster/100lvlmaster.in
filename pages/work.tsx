import { Container } from "../components/layouts/container";
import Card from "../components/card";
const WorkPage = () => {
  return (
    <div>
      <Container className="flex flex-col">
        <div className=" flex  flex-col">
          <h2 className="font-bold text-xl">{"Projects"}</h2>
          <div>
            <ul className="grid grid-cols-2 lg:grid-cols-3  py-5 justify-items-stretch	">
              <Card
                href="https://flowfi.live"
                title={`FlowFi`}
                thumbnail={`https://flowfi.live/favicon.png`}
                description={`An online markdown editor/scratchpad with LoFi beats to enter the state of flow`}
              />{" "}
              <Card
                href="https://github.com/100lvlmaster/the-intersect"
                title={`The intersect project`}
                thumbnail={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvftboJ79mGZyKh1IztzFzVlmtwHThznQ3XDi20l10KHVnFH26PNpNCX_uEqRPgRGxuQ&usqp=CAU`}
                description={`An prototype weekend project inspired from the famous series "Chuck"`}
              />
              <Card
                href="https://github.com/100lvlmaster/Intersect_api"
                title={`Image search API`}
                thumbnail={`https://www.pngkit.com/png/detail/380-3801403_go-programming-language-logo-golang-logo-png.png`}
                description={`An API made with gin-gonic to scrape images from various sources`}
              />
              <Card
                href="https://github.com/100lvlmaster/maymay"
                title={`Maymay v2`}
                thumbnail={`https://raw.githubusercontent.com/100lvlmaster/maymay/development/assets/icon/logo.png`}
                description={`maymay is an open source flutter app made to spawn random memes from reddit and have the user scroll through them as if a social media app but purely for memes.`}
              />
              <Card
                href="https://github.com/100lvlmaster/time_tracker"
                title={`Time tracker`}
                thumbnail={`https://i.ibb.co/YR0H5pJ/play-store-logo.png`}
                description={`Todos and Note-taking in realtime with firebase.`}
              />
              <Card
                href="https://github.com/100lvlmaster/stacked_page_view"
                title={`Stacked page view`}
                thumbnail={`https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png`}
                description={`A Flutter pacakge that provides vertical pageview carousel in flutter`}
              />
              <Card
                href="https://github.com/100lvlmaster/youtube_metadata"
                title={`Youtube Metadata`}
                thumbnail={`https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png`}
                description={`A flutter package to fetch a videos metadata from the link using the oembed API`}
              />
              <Card
                href="https://github.com/100lvlmaster/spotify_metadata"
                title={`Spotify Metadata`}
                thumbnail={`https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png`}
                description={`A flutter package to fetch a spotify song/playlist's metadata from the link using the oembed API`}
              />
              <Card
                href="https://github.com/100lvlmaster/one_for_all_theme"
                title={`One for all`}
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

import { Container } from "../components/layouts/container";
import Card from "../components/card";
import { FrontMatter } from "lib/types";
///
const WorkPage = () => {
  const metaData: FrontMatter = {
    title: "Project & Work - 100lvlmaster",
    description: "Projects and works of 100lvlmaster | Navin Kodag",
    url: `https://100lvlmaster.in/work/`,
  };
  return (
    <Container metaData={metaData} className="flex flex-col space-y-5">
      <h2 className="font-black text-4xl">Work</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card
          lang="Svelte"
          href="https://flowfi.live"
          title="FlowFi"
          description="An online markdown editor/scratchpad with LoFi beats to enter the state of flow"
        />
        <Card
          lang="Typescript"
          href="https://the-intersect.vercel.app/"
          githubLink="https://github.com/100lvlmaster/the-intersect"
          title="The Intersect project"
          description={`An prototype weekend project inspired from the famous series "Chuck"`}
        />
        <Card
          lang="GO"
          githubLink="https://github.com/100lvlmaster/Intersect_api"
          title={`Image search API`}
          description={`An API made with gin-gonic to scrape images from various sources`}
        />
        <Card
          lang="Dart"
          githubLink="https://github.com/100lvlmaster/maymay"
          title="Maymay"
          description="Open source Flutter app to fetch random memes at will"
        />
        <Card
          lang="Dart"
          githubLink="https://github.com/100lvlmaster/time_tracker"
          title={`Time tracker`}
          description={`Todos and Note-taking in realtime with Firebase and Flutter`}
        />
        <Card
          lang="Dart"
          githubLink="https://github.com/100lvlmaster/stacked_page_view"
          href="https://pub.dev/packages/stacked_page_view"
          title={`Stacked page view`}
          description={`A Flutter pacakge that provides vertical pageview carousel in flutter`}
        />
        <Card
          lang="Dart"
          githubLink="https://github.com/100lvlmaster/youtube_metadata"
          href="https://pub.dev/packages/youtube_metadata"
          title="Youtube Metadata"
          description="A Flutter package to fetch a videos metadata from the link using the oembed API"
        />
        <Card
          lang="Dart"
          href="https://pub.dev/packages/spotify_metadata"
          githubLink="https://github.com/100lvlmaster/spotify_metadata"
          title="Spotify Metadata"
          description="A Flutter package to fetch a spotify song/playlist's metadata using the oembed API"
        />
        <Card
          lang="json"
          href="https://marketplace.visualstudio.com/items?itemName=100lvlmaster.one-for-all"
          githubLink="https://github.com/100lvlmaster/one_for_all_theme"
          title="One for all"
          description="VS code theme built using Atom's one dark pro color scheme with a minimal design."
        />
      </ul>
    </Container>
  );
};
export default WorkPage;

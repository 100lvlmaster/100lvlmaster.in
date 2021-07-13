import { Container, Spacer } from "../components/layouts/container";
import Card from "../components/card";
export default function Home() {
  return (
    <div>
      <Container id="home" className=" ">
        <span className="pt-28">
          <span className="text-3xl font-bold pb-20">{`Hi, I'm Navin Kodag,`}</span>
          <br />
          <Spacer />

          <span className="dark:text-gray-400 text-gray-600">
            {` I'm a developer.`}
            <br />
            {`I design, create and optimize.`}
          </span>
          <br />
          <br />
          <p className="text-sm dark:text-gray-400 text-gray-600 pr-10">
            {`I see, you've stumbled upon my small kingdom on the internet.`}
            <br />
            {`I write, read, listen and everything in between.`}
            <br />
            <span>{`Feel free to contact me for projects`}</span>
          </p>
        </span>
        <Spacer />
        <div className="p-16 flex flex-row align-items-baseline">
          <Spacer />
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-xl">Projects</h1>
          <div className="grid grid-cols-2 md:grid-cols-3">
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
          </div>
        </div>
      </Container>
    </div>
  );
}

import { Container } from "../components/layouts/container";
import Card from "../components/card";
export default function Home() {
  return (
    <Container id="home">
      <div className="py-10 flex flex-col">
        <div className="text-3xl md:text-4xl lg:text-5xl font-black py-2">
          Hey, I&apos;m Navin Kodag
        </div>
        <div className="dark:text-gray-400 text-gray-600 py-2">
          I&apos;m a Fullstack developer at &nbsp;
          <a rel="noreferrer" href="https://www.alekha.net" target="_blank_">
            <span className="underline text-black dark:text-white">
              Alekha.
            </span>
          </a>
          &nbsp; I work on NodeJs, Golang, Flutter, NextJs and Svelte.
          <div className="dark:text-gray-400 text-gray-600 py-3">
            I see that you&apos;ve stumbled upon my small kingdom on the
            internet. I write, read, listen and everything in between. Feel free
            to contact me for projects.
          </div>
        </div>

        <a
          rel="noreferrer"
          href="https://github.com/100lvlmaster"
          target="_blank_"
        >
          <div className="flex flex-row space-x-1 items-center">
            <div className="flex-grow"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
        </a>
      </div>
      <div className="flex-grow" />
      <div className="space-y-5">
        <h1 className="font-medium text-xl tracking-wide">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card
            lang="Svelte"
            href="https://flowfi.live"
            title="FlowFi"
            description="An online markdown editor/scratchpad with LoFi beats to enter the state of flow"
          />
          <Card
            lang="Javascript"
            href="https://the-intersect.vercel.app/"
            githubLink="https://github.com/100lvlmaster/the-intersect"
            title={`The Intersect project`}
            description={`An prototype weekend project inspired from the famous series "Chuck"`}
          />
          <Card
            lang="Go"
            href="https://github.com/100lvlmaster/Intersect_api"
            githubLink="https://github.com/100lvlmaster/Intersect_api"
            title={`Image search API`}
            description={`An API made with gin-gonic to scrape images from various sources`}
          />
        </div>
      </div>
    </Container>
  );
}

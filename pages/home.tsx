import Link from "next/link";
import { Container, Spacer } from "../components/layouts/container";

import { TimelineComponent } from "../components/timeline";
const HomePage = () => {
  return (
    <div>
      <Container id="home" className=" ">
        <span className="pt-28">
          <span className="text-3xl font-bold pb-20">{`Hi, I'm Navin Kodag,`}</span>
          <br />
          <Spacer />

          <span className="dark:text-gray-400 text-gray-600">
            {`I'm a developer.`}
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

          <div>
            <span className="pr-2 text-sm">my work</span>
            <Link href="/work" passHref={true}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <TimelineComponent />
        </div>
      </Container>
    </div>
  );
};
export default HomePage;

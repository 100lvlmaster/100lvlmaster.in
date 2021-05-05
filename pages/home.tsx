import Link from "next/link";
import { Container, Spacer } from "../components/container";
import { Milestone, Timeline } from "../components/timeline";
const HomePage = () => {
  return (
    <div>
      <Container id="home" className=" h-screen " showFooter={false}>
        <span className="pt-28">
          <span className="text-3xl pb-20">Hi, I'm Navin Kodag,</span>
          <br />
          <Spacer />

          <span className="dark:text-gray-400 text-gray-600">
            I'm a developer.
            <br />I design, create and optimize.
          </span>
          <br />
          <br />
          <p className="text-sm dark:text-gray-400 text-gray-600 pr-10">
            I see, you've stumbled upon my small kingdom on the internet.
            <br />I write, read, listen and everything in between.
            <br />
            <span> Feel free to contact me for projects</span>
          </p>
        </span>
        <Spacer />
        <div className="pb-20 flex flex-row align-items-baseline">
          <div>
            <span className="pr-2">scroll</span>
            <Link href="#timeline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </Link>
          </div>
          <Spacer />

          <div>
            <span className="pr-2">my work</span>
            <Link href="/work">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
      <Container id={"timeline"} hideNav={true}>
        {" "}
        <Timeline>
          <Milestone
            date={"June/2019"}
            title={"Started pursuing a Bachelor's degree in computer science"}
            description={
              "The time i had been waiting since 10th grade, who needs chemistry when i can make a twitter bot tweet memes for me. Twitter meme-bot goes brrrrr."
            }
          />
          <Milestone
            date={`March/2020`}
            title={`Launched maymay_v1`}
            description={`A full stack meme client to render memes from reddit. Two web clients, in react and svelte, And  a mobile client made with flutter.`}
          ></Milestone>
          <Milestone
            date={"July/2020"}
            title={"Joined mybytecode as an intern"}
            description={
              <ul className="list-disc space-y-2">
                <li>
                  {` Worked on flutter with MVC architecture to make authentication
                  modules.`}
                </li>
                <li>
                  {` Helped to create and maintain a product similar to inshorts
                  and hacker news`}
                </li>
                <li>
                  {`Used laravel to paginate REST API responses, reducing load
                  times by`}
                </li>
                <li>
                  {`Used ffmpeg to complete media manipulation operation`}{" "}
                </li>
                <li>
                  {`Used firebase to design and create a realtime social media app`}
                </li>
              </ul>
            }
          />
          <Milestone
            date={`October/2020`}
            title={`Promoted to junior developer`}
            description={
              <ul className="list-disc space-y-2">
                <li>
                  {`Utilized GraphQL to reduce over-fetching and under-fetching of data by 75% 🚀`}
                </li>
                <li>
                  {`Handled development of two front-end mobile clients and a node.js backend 💯`}
                </li>
                <li>
                  {`Combined MVC and BLoC for the architecture of the mobile client created in Flutter`}
                </li>
              </ul>
            }
          ></Milestone>
        </Timeline>
      </Container>
    </div>
  );
};
export default HomePage;

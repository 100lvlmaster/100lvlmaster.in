import { Container, Spacer } from "../components/container";
import { Milestone, Timeline } from "../components/timeline";
const About = () => {
  return (
    <div>
      <Container>
        <span className="text-2xl">about</span>
        <div className="dark:text-gray-400 text-sm text-gray-800 py-14">
          <p>
            {`
              I am a full-stack junior developer at mybytecode, 
              I started out as a self-taught developer and 
              now I am a second-year student pursuing a degree in Computer Science here in India.
                `}
          </p>
          <br />
          <p>
            {`I mostly work on Flutter and Next.js on front-end. And use Laravel,
            Node.js and Firebase for back-end.`}
          </p>
          <br />
          <p>I've got experience using and writing REST APIs and GraphQL</p>
        </div>
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
              <ul className="list-disc list-disc space-y-2">
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
export default About;

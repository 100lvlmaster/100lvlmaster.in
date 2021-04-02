import { Container, Spacer } from "../components/container";
import { Timeline } from "../components/timeline";
const About = () => {
  return (
    <div className="">
      <Container className="items-center">
        <div className="flex flex-row text-xl">
          <p>About</p>
          <Spacer />
        </div>
        <div className="dark:text-gray-400 text-gray-800 pt-28">
          <p>
            {`
              I am a full-stack junior developer at mybytecode, 
              I am a self-taught developer and 
              a second-year student pursuing a degree in Computer Science here in India.
                `}
          </p>
          <br />
          <p>
            I mostly work on Flutter and Next.js on front-end. And use Laravel,
            Node.js and Firebase for back-end.
          </p>
          <br />
          <p>I've got experience using and writing REST APIs and GraphQL</p>
        </div>
        <Timeline />
      </Container>
    </div>
  );
};
export default About;

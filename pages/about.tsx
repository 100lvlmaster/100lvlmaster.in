import { Container, Spacer } from "../components/container";
import { TimelineComponent } from "../components/timeline";
const About = () => {
  return (
    <div>
      <Container>
        <h2 className="text-2xl font-bold py-3">About</h2>
        <div className="dark:text-gray-400 text-sm text-gray-800 py-10">
          <p>
            {`
              I am a full-stack junior developer at alekha.net, 
              I started out as a self-taught developer and 
              now I am a third-year student pursuing a degree in Computer Science here in India.
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
        <TimelineComponent />
      </Container>
    </div>
  );
};
export default About;

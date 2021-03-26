import "../components/container";

import { Container, Spacer } from "../components/container";
import { Footer } from "../components/footer/footer";
const About = () => {
  return (
    <div className="">
      <Container className="w-scren h-screen items-center">
        <div className="flex flex-row text-xl">
          <p>About</p>
          <Spacer />
        </div>
        <div className="dark:text-gray-400 text-gray-800 pt-28">
          <p>
            {`
              I am a junior developer at mybytecode, 
              I am a self-taught developer. But i guess i started early,  lol :] .
               I am also a second-year student pursuing a degree in Computer Science here in India.
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
      </Container>
      <Footer />
    </div>
  );
};
export default About;

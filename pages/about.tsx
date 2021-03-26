import "../components/container";

import { Container } from "../components/container";
import { Footer } from "../components/footer/footer";
const About = () => {
  return (
    <div>
      <Container className="flex h-screen">
        <div>
          <span className="text-xl ">About</span>
          <br></br>
          <br></br>
          <div className="dark:text-gray-400 text-gray-800">
            <p>
              I mostly work on Flutter and Next.js on front-end. And use
              Laravel, Node.js and Firebase for back-end.
            </p>
            <br></br>
            <p>I've got experience using and writing REST APIs and GraphQL</p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default About;

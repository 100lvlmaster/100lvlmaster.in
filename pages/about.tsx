import { Container } from "../components/layouts/container";
import { TimelineComponent } from "../components/timeline";
const About = () => {
  return (
    <div>
      <Container>
        <h2 className="font-black text-4xl">About</h2>
        <div className="dark:text-gray-400 text-sm text-gray-800 py-10">
          <p>
            I started out as a self-taught teenage script kiddie at 16. Then
            pursued bachelors in Computer Science. Now I&apos;m in the last year
            of my degree. Having interned at 2 startups and 6 months of
            freelancing experience.
          </p>
          <br />
          <p>
            Now I build efficient products using different tech stacks. I use
            Flutter, React, NextJs or Svelte for the Front-end. With Node.js,
            NestJs, Gin-gonic, Gofiber or Firebase for Back-end. I&apos;ve
            created consistent and realtime APIs with GraphQL and REST.
          </p>
        </div>
        <TimelineComponent />
      </Container>
    </div>
  );
};
export default About;

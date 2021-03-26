import Link from "next/link";
import { Container, Spacer } from "../components/container";
import { Footer } from "../components/footer/footer";
const HomePage = () => {
  return (
    <div>
      <Container id="home" className="w-screen h-screen">
        <Spacer></Spacer>
        <span>
          <span className="text-xl pb-20">Hi, I'm Navin Kodag,</span>
          <br />
          <span className="dark:text-gray-400 text-gray-600">
            I'm a developer.
            <br />I design, create and optimize.
          </span>
          <br></br>
          <br></br>
          <p className="text-sm dark:text-gray-400 text-gray-600">
            I see, you've stumbled upon my small kingdom on the internet.
            <br></br>I write, read, listen and everything in between.
            <span> Feel free to contact</span>
          </p>
        </span>
        <Spacer></Spacer>
        <div className="pb-10 flex flex-row justify-end align-items-baseline">
          <span className="pr-2">my work</span>
          <Link href="/work">
            <svg
              width="35"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
            </svg>
          </Link>
        </div>
      </Container>
      <Container id="about"></Container>
      <Footer></Footer>
    </div>
  );
};
export default HomePage;
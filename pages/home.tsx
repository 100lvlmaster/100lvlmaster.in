import Link from "next/link";
import { Container, Spacer } from "../components/container";
import { Footer } from "../components/footer/footer";
const HomePage = () => {
  return (
    <div id="home">
      <Container className="w-screen h-screen">
        <Spacer></Spacer>
        <span>
          Hi, I'm Navin Kodag
          <br />
          <span className="dark:text-gray-400 text-gray-600">
            I'm a developer
            <br />I design, create and optimize
          </span>
        </span>
        <Spacer></Spacer>
        <div className="pb-10 flex flex-row justify-end align-items-baseline">
          <span className="pr-2">my work</span>
          <Link href="/timeline">
            <svg
              width="35"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
            </svg>
          </Link>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};
export default HomePage;

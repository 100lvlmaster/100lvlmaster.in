import Head from "next/head";
import { NavBar } from "../navbar/navbar";
export const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Henlo</title>
        <link
          rel="icon"
          href="/assets/website_title_link.png"
          type="image/x-icon"
        ></link>
      </Head>
      <div className="dark:bg-black dark:text-white text-black bg-white flex flex-col justify-between	h-screen p-10">
        <NavBar />
        <div className="">
          Hi, I'm Navin Kodag
          <br />
          I'm a developer
          <br />I design, create and optimize
        </div>

        <div className=" flex flex-row justify-end align-items-baseline">
          <span className="pr-2">my work</span>
          <img className="h-10 w-10 " src="/assets/down-arrow-white.svg" />
        </div>
      </div>
    </div>
  );
};

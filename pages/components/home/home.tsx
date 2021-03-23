import Head from "next/head";
import { NavBar } from "../navbar/navbar";
export const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Henlo</title>
      </Head>
      <div className="dark:bg-black dark:text-white text-black bg-white flex flex-col justify-between	 h-screen">
        <NavBar />
        <div className="self-center	">Hi, I'm Navin Kodag</div>
        <div className="p-10 flex flex-row justify-end">
          <span>my work</span>
          <img src="" />
        </div>
      </div>
    </div>
  );
};

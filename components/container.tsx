import Head from "next/head";
import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
export const Container = (props) => {
  return (
    <div
      id={props.id}
      className="dark:bg-black flex flex-col dark:text-white text-black w-screen bg-white items-stretch justify-items-stretch"
    >
      <Head>
        <title>navinko</title>

        <link
          rel="icon"
          href="/assets/website_title_link.png"
          type="image/x-icon"
        />
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfolio website" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,Next.js,Tailwind"
        />
        <meta name="author" content="Navin Kodag" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      {props.hideNav ?? false ? `` : <NavBar />}
      <div
        className={"flex flex-col justify-items-stretch md:px-40 lg:px-80 text-lg pt-28 p-10"
          .concat(" ")
          .concat(props.className)}
      >
        {props.children}
      </div>
      {props.showFooter ?? true ? (
        <Footer className="p-10 md:px-40 lg:px-80" />
      ) : (
        ``
      )}
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

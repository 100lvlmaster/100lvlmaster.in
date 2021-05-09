import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
import Head from "next/head";
export const Container = (props) => {
  return (
    <div
      id={props.id}
      className="dark:bg-black flex flex-col dark:text-white text-black w-full bg-white items-center justify-items-stretch py-5"
    >
      {props.hideNav ?? true ? (
        ``
      ) : (
        <Head>
          <link
            rel="icon"
            href="/assets/website_title_link.png"
            type="image/x-icon"
          />
          <title>navinko</title>
          <html lang={`en`} />

          <meta charSet="UTF-8" />
          <meta name="description" content="navin's website" />
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
      )}
      {props.hideNav ?? false ? `` : <NavBar />}
      <div
        className={"flex flex-col justify-items-stretch max-w-2xl px-8 py-5 md:px-16"
          .concat(" ")
          .concat(props.className)}
      >
        {props.children}
        {props.showFooter ?? true ? <Footer className="py-10" /> : ``}
      </div>
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

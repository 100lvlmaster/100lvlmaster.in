import Head from "next/head";
import HomePage from "./home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Henlo</title>
        <link
          rel="icon"
          href="/assets/website_title_link.png"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </div>
  );
}

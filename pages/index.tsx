import Head from "next/head";
import HomePage from "./home";
export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="/assets/website_title_link.png"
          type="image/x-icon"
        />
      </Head>
      <HomePage />
    </div>
  );
}

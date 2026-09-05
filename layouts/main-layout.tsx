import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { SITE_URL } from "../lib/site";
import { Seo } from "../lib/types";

interface Props {
  children: JSX.Element | JSX.Element[];
  meta?: Seo;
}

const MainLayout = ({ meta: metaProps, children }: Props) => {
  const meta = {
    title: "Navin Kodag | Developer 🚀",
    description:
      "Navin Kodag is a software developer based in India. He is a self-taught developer with a passion for building Fullstack applications.",
    url: SITE_URL,
    image: `${SITE_URL}/avatar.jpeg`,
    ...metaProps,
  };

  return (
    <div className="flex min-h-screen flex-col border-t-2 border-blue-500">
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:site_url" content={meta.url} />
      </Head>
      <div className="mx-auto w-full px-4 md:w-4/5 lg:w-[55%]">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

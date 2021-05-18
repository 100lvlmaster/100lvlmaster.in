import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
import { useRouter } from "next/router";
import NextHead from "next/head";
export const Container = (props) => {
  const router = useRouter();
  const { id, children, className } = props;
  const meta = {
    title: "Navin Kodag – Developer",
    description: `Full stack developer, onw to 10x developer 🚀`,
    image: "https://100lvlmaster.in/assets/logo_art.jpg",
    type: "website",
    url: "https://100lvlmaster.in",
  };
  return (
    <div
      id={id}
      className="dark:bg-black flex flex-col dark:text-white text-black w-full bg-white items-center justify-items-stretch py-5"
    >
      <NextHead>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} key="ogimage" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:site_name" content="Navin Kodag" key="ogsitename" />
        <meta property="og:url" content={`${meta.url}`} key="ogurl" />

        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twhandle"
        />
        <meta name="twitter:site" content="@100lvlmaster" />
        <meta name="twitter:creator" content={"@100lvlmaster"} key="twhandle" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Next.js, Tailwind"
        />
        <meta name="author" content="Navin Kodag" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </NextHead>
      <NavBar />
      <div
        className={"flex flex-col justify-items-stretch max-w-2xl px-8 py-5 md:px-16"
          .concat(" ")
          .concat(className)}
      >
        {children}
        <Footer className="py-10" />
      </div>
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

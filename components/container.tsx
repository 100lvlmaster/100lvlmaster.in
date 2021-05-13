import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
import { useRouter } from "next/router";
import NextHead from "next/head";
export const Container = (props) => {
  const router = useRouter();
  const { id, children, customMeta, className } = props;
  const meta = {
    title: "Navin Kodag – Developer",
    description: `Full stack developer, onw to 10x developer 🚀`,
    image: "https://100lvlmaster.in/assets/logo_art.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div
      id={id}
      className="dark:bg-black flex flex-col dark:text-white text-black w-full bg-white items-center justify-items-stretch py-5"
    >
      <NextHead>
        <link
          rel="preload"
          href="/fonts/Raleway.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://100lvlmaster.in${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://100lvlmaster.in${router.asPath}`}
        />
        <meta
          property="og:description"
          content={meta.description}
          key="ogsitename"
        />
        <meta property="og:image" content={meta.image} key="ogimage" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:site_name" content="Navin Kodag" key="ogsitename" />
        <meta
          property="og:url"
          content={"https://100lvlmaster.in"}
          key="ogurl"
        />

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
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Next.js, Tailwind"
        />
        <meta name="author" content="Navin Kodag" />
        <html lang={`en`} />
        <meta charSet="UTF-8" />
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

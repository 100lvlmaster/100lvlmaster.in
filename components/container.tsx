import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
import { useRouter } from "next/router";
import Head from "next/head";
export const Container = (props) => {
  const router = useRouter();
  const { showFooter, id, hideNav, children, customMeta, className } = props;
  const meta = {
    title: "Navin Kodag – Developer",
    description: `Full stack developer, onw to 10x developer 🚀`,
    image: "https://100lvlmaster.in/assets/website_title_link.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div
      id={id}
      className="dark:bg-black flex flex-col dark:text-white text-black w-full bg-white items-center justify-items-stretch py-5"
    >
      {hideNav ?? true ? (
        ``
      ) : (
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://100lvlmaster.in${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://navinkodag.netlify.app${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Navin Kodag" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@100lvlmaster" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
          <link
            rel="preload"
            href="/fonts/Raleway.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
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
      {hideNav ?? false ? `` : <NavBar />}
      <div
        className={"flex flex-col justify-items-stretch max-w-2xl px-8 py-5 md:px-16"
          .concat(" ")
          .concat(className)}
      >
        {children}
        {showFooter ?? true ? <Footer className="py-10" /> : ``}
      </div>
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

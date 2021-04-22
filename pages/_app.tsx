import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="preload"
            href="/fonts/helveticanue.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}
          <meta charSet="UTF-8" />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

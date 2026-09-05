import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var m=localStorage.getItem("theme");if(m!=="light"){document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`,
            }}
          />
        </Head>
        <body className="bg-white text-gray-900 dark:bg-[#101111] dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

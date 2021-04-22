import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
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
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

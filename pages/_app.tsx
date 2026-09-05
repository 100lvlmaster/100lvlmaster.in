import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={firaSans.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

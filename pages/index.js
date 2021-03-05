import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col bg-black text-white flex-grow items-stretch text-center justify-between	w-screen">
        <div className="text-4xl p-20">Hi, I'm Navin Kodag</div>
        <div className="text-4xl">Hi, I'm Navin Kodag</div>
        <div className="text-4xl">Hi, I'm Navin Kodag</div>
      </div>
    </div>
  );
}

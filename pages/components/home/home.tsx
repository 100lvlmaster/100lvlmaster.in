import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { saveTheme, getTheme } from "../../../utils/theme_helper";
import { ToggleThemeButton } from "../navbar/toggle_theme_button";
import { NowPlaying } from "./now_playing";
// import { NavBar } from "../navbar/navbar";
export const HomePage = () => {
  const [imgUrl, toggleImgUrl] = useState("/assets/sun.svg");
  const { theme, setTheme } = useTheme();
  /// Change theme
  const onChangeTheme = (val: string) => {
    setTheme(val);
    saveTheme(val);
    toggleImgUrl(val === "dark" ? "/assets/sun.svg" : "/assets/moon.svg");
  };
  /// Call on mount
  useEffect(() => onChangeTheme(getTheme()), []);
  ///
  return (
    <div>
      <Head>
        <title>Henlo</title>
        <link
          rel="icon"
          href="/assets/website_title_link.png"
          type="image/x-icon"
        ></link>
      </Head>
      <div className="dark:bg-black dark:text-white text-black bg-white flex flex-col justify-between	h-screen p-10">
        <div className=" flex flex-row items-center">
          <ToggleThemeButton
            imgUrl={imgUrl}
            onToggle={() => onChangeTheme(theme == "dark" ? "light" : "dark")}
          />
          <span className="flex-grow"></span>
          <span className="pl-5">about</span>
          <span className="pl-5">contact</span>
          <span className="pl-5">work</span>
        </div>
        <div className="">
          Hi, I'm Navin Kodag
          <br />
          I'm a developer
          <br />I design, create and optimize
        </div>

        <div className="pb-10 flex flex-row justify-end align-items-baseline">
          <span className="pr-2">my work</span>
          <img
            className="h-10 w-10 "
            src={
              (theme ?? "dark") == "dark"
                ? "/assets/down-arrow-white.svg"
                : "/assets/down-arrow.svg"
            }
          />
        </div>
      </div>
      <NowPlaying />
    </div>
  );
};

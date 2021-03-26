import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { saveTheme, getTheme } from "../../../utils/theme_helper";
import ToggleThemeButton from "../navbar/toggle_theme_button";
// import { NowPlaying } from "./now_playing";
import Link from "next/link";

// import { NavBar } from "../navbar/navbar";
const HomePage = () => {
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
      <div className="p-10 dark:bg-black dark:text-white text-black bg-white flex flex-col justify-between	h-screen ">
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
          <Link href="/timeline">
            <img
              className="h-10 w-10 "
              src={
                (theme ?? "dark") == "dark"
                  ? "/assets/down-arrow-white.svg"
                  : "/assets/down-arrow.svg"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

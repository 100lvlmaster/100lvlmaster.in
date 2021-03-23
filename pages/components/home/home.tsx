import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { saveTheme, getTheme } from "../../../utils/theme_helper";
export const HomePage = () => {
  const imagePath = "assets/sun.svg";
  const [imgUrl, toggleImgUrl] = useState("/assets/moon.svg");
  const { theme, setTheme } = useTheme();
  /// Change theme
  const onChangeTheme = (val: string) => {
    setTheme(val);
    saveTheme(val);
    toggleImgUrl(val === "dark" ? "/assets/moon.svg" : "/assets/sun.svg");
  };
  /// Call on mount
  useEffect(() => onChangeTheme(getTheme()), []);
  ///
  return (
    <div className="dark:bg-black dark:text-white text-black bg-white">
      <div> </div>
      <img
        height="20"
        width="20"
        onClick={() => onChangeTheme(theme === "dark" ? "light" : "dark")}
        src={imgUrl}
      ></img>
      Hi, I'm Navin Kodag
    </div>
  );
};

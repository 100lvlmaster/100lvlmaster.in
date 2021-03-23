import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { saveTheme, getTheme } from "../../../utils/theme_helper";

//
export const ToggleThemeButton = () => {
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
    <div className="p-2 rounded dark:bg-gray-800 bg-gray-200 select-none">
      <img
        height="20"
        width="20"
        onClick={() => onChangeTheme(theme === "dark" ? "light" : "dark")}
        src={imgUrl}
      ></img>
    </div>
  );
};

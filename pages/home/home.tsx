import { useTheme } from "next-themes";
import { useEffect } from "react";
import { saveTheme, getTheme } from "../../utils/theme_helper";
export const HomePage = () => {
  const { theme, setTheme } = useTheme();
  /// Change theme
  const onChangeTheme = (val: string) => {
    setTheme(val);
    saveTheme(val);
  };
  /// Call on mount
  useEffect(() => onChangeTheme(getTheme()), []);
  ///
  return (
    <div className="dark:bg-black dark:text-white dark:text-black bg-white">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3"
        onClick={() => onChangeTheme(theme === "dark" ? "light" : "dark")}
      ></button>
      <div className="text-4xl p-20">Hi, I'm Navin Kodag</div>
    </div>
  );
};

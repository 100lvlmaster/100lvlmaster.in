import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { saveTheme, getTheme } from "../../utils/theme_helper";
import { Spacer } from "../container";
import Link from "next/link";
//
export const NavBar = () => {
  const [mounted, setMount] = useState(false);
  const { theme, setTheme } = useTheme();

  /// Router to get current route
  const router = useRouter();
  /// Change theme
  const onChangeTheme = (val: string) => {
    setTheme(val);
    saveTheme(val);
    if (!mounted) setMount(!mounted);
  };
  /// Call on mount
  useEffect(() => onChangeTheme(getTheme()), []);
  ///
  return (
    <nav
      className={`sticky-nav text-base fixed flex flex-row items-center p-8 lg:px-60 md:px-20 w-full bg-white bg-white dark:bg-black dark:bg-opacity-95 bg-opacity-80`}
    >
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
            ) : (
              <path d="M20.354 15.354 A 9 9 0 0 1 8.646 3.646 A 9.003 9.003 0 0 0 12 21 a 9.003 9.003 0 0 0 8.354 -5.646 Z" />
            )}
          </svg>
        )}
      </button>
      <Spacer></Spacer>

      <Link href="/about">
        <span className="pl-5">about</span>
      </Link>
      <Link href="/">
        <span className="pl-5">home</span>
      </Link>
      <Link href="/work">
        <span className="pl-5 ">work</span>
      </Link>
    </nav>
  );
};

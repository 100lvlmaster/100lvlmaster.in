import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { saveTheme, getTheme } from "../../utils/theme_helper";
import Link from "next/link";
import { useRouter } from "next/router";
//
export const NavBar = () => {
  const [mounted, setMount] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  /// Change theme
  const onChangeTheme = useCallback(
    (val: string): void => {
      setTheme(val);
      saveTheme(val);
      if (!mounted) {
        setMount(true);
      }
    },
    [mounted, setTheme]
  );
  const NextLink = ({ title, href }) => {
    return (
      <Link href={href}>
        <a className="text-black dark:text-white">
          <span>{title}</span>
        </a>
      </Link>
    );
  };
  /// Call on mount
  useEffect(() => {
    onChangeTheme(getTheme());
  }, [onChangeTheme]);
  ///
  return (
    <nav className="sticky z-10 bg-white dark:bg-dark top-0 w-full flex flex-row dark:bg-opacity-95 bg-opacity-95 items-center space-x-5 max-w-2xl px-5 md:px-0 py-2">
      <NextLink href="/" title={`Home`} />
      <NextLink href="/about" title={`About`} />
      <NextLink href="/blog" title={`Blog`} />
      <NextLink href="/work" title={`Work`} />
      <div className="flex-grow"></div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex flex-col justify-center items-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="p-5">
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4"
            >
              {theme === "dark" ? (
                <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
              ) : (
                <path d="M20.354 15.354 A 9 9 0 0 1 8.646 3.646 A 9.003 9.003 0 0 0 12 21 a 9.003 9.003 0 0 0 8.354 -5.646 Z" />
              )}
            </svg>
          )}
        </span>
      </button>
    </nav>
  );
};

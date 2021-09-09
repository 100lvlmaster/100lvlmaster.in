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
        <a
          className={`hover:text-black dark:hover:text-white ${`text-gray-400`}`}
        >
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
    <nav className="sticky-nav w-full flex flex-row justify-center bg-light dark:bg-dark dark:bg-opacity-95 bg-opacity-95 backdrop-blur-xl blur-xl px-2">
      <div className="max-w-2xl w-full flex flex-row items-center p-5">
        <div className="space-x-5 flex flex-row">
          <NextLink href="/" title={`Home`} />
          <NextLink href="/about" title={`About`} />
          <NextLink href="/blog" title={`Blog`} />
          <NextLink href="/work" title={`Work`} />
        </div>
        <div className="flex-grow"></div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="flex flex-col justify-center items-center h-4 w-4 text-black dark:text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
            >
              {theme === "dark" ? (
                <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
              ) : (
                <path d="M20.354 15.354 A 9 9 0 0 1 8.646 3.646 A 9.003 9.003 0 0 0 12 21 a 9.003 9.003 0 0 0 8.354 -5.646 Z" />
              )}
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

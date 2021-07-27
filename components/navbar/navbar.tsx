import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { saveTheme, getTheme } from "../../utils/theme_helper";
import Link from "next/link";
import { Spacer } from "components/layouts/container";
import { useRouter } from "next/router";
//
const Separator = () => {
  return <div className="text-gray-300">/</div>;
};

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
    const isCurrent = router.asPath === href;
    return (
      <Link href={href}>
        <a
          className={`hover:text-black dark:hover:text-white ${
            isCurrent ? `text-black dark:text-white` : `text-gray-400`
          }`}
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
    <nav
      className={`sticky-nav w-full flex flex-row justify-center bg-gray-100 dark:bg-background dark:bg-opacity-95 bg-opacity-95`}
    >
      <div className="max-w-2xl w-full flex flex-row items-center p-5">
        <div className="space-x-3 flex flex-row">
          <NextLink href="/" title={`home`} />
          <Separator />
          <NextLink href="/about" title={`about`} />
          <Separator />
          <NextLink href="/blog" title={`blog`} />
          <Separator />
          <NextLink href="/work" title={`work`} />
        </div>
        <Spacer></Spacer>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 flex flex-col justify-cente items-center dark:bg-gray-800 rounded p-2.5 h-8 w-8"
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
      </div>
    </nav>
  );
};

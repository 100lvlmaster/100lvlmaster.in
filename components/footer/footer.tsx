import NextLink from "next/link";
const linkClassName: string = `dark:text-gray-400 dark:hover:text-gray-200 text-gray-500 hover:text-gray-800 transition no-underline`;
const ExternalLink = (props) => (
  <a
    className="no-underline"
    rel="noreferrer"
    target="_blank"
    href={props.href}
  >
    {props.children}
  </a>
);
export const Footer = (props) => {
  return (
    <div
      id="contact"
      className={"w-full max-w-2xl dark:text-gray-300 text-black flex flex-col space-y-3 px-28 md:p-16 pt-10".concat(
        ` ${props.className}`
      )}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 text-sm items-center lg:gap-1 space-y-2">
        <NextLink href="/">
          <a>
            <div className="flex items-center flex-row">
              <span className={linkClassName}>{`Home`}</span>
            </div>
          </a>
        </NextLink>
        <NextLink href="/about">
          <a>
            <div className="flex items-center flex-row ">
              <span className={linkClassName}>{`About`}</span>
            </div>
          </a>
        </NextLink>
        <NextLink href="/work">
          <a>
            <div className="flex items-center flex-row">
              <span className={linkClassName}>{`Work`}</span>
            </div>
          </a>
        </NextLink>{" "}
        <NextLink href="/blog">
          <a>
            <div className="flex items-center flex-row">
              <span className={linkClassName}>{`Blog`}</span>
            </div>
          </a>
        </NextLink>
        <ExternalLink href={`https://dev.to/100lvlmaster`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>{`Dev.to`}</span>
          </div>
        </ExternalLink>{" "}
        <ExternalLink href={`https://discordapp.com/users/392213395031719957/`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>{`Discord`}</span>
          </div>
        </ExternalLink>
        <ExternalLink href={`https://github.com/100lvlmaster`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>Github</span>
          </div>
        </ExternalLink>
        <ExternalLink href={`mailto: navinkodag@gmail.com`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>Gmail</span>
          </div>
        </ExternalLink>
        <ExternalLink href={`https://www.linkedin.com/in/navin-kodag/`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>{`LinkedIn`}</span>
          </div>
        </ExternalLink>
        <ExternalLink href={`https://100lvlmaster.medium.com/`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>{`Medium`}</span>
          </div>
        </ExternalLink>
        <ExternalLink href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}>
          <div className="flex flex-row items-center space-x-2">
            <span className={linkClassName}>{`Youtube`}</span>
          </div>
        </ExternalLink>
      </div>
      <span className="text-xs flex flex-col text-center pt-5 text-gray-500 dark:text-gray-400">
        {`Made with Next.js & ❤️ `}
        <div className="text-xs">
          {`© 2021 Navin Kodag. All rights reserved`}.
        </div>
      </span>
    </div>
  );
};

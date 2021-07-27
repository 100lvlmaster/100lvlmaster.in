import Link from "next/link";
const linkClassName: string = `dark:text-gray-400 dark:hover:text-gray-200 text-gray-500 hover:text-gray-800 transition`;
const ExternalLink = (props) => (
  <a rel="noreferrer" target="_blank" href={props.href}>
    {props.children}
  </a>
);
export const Footer = (props) => {
  return (
    <div
      id="contact"
      className={"dark:text-gray-300 text-black flex flex-col space-y-3".concat(
        ` ${props.className}`
      )}
    >
      <div className="grid md:grid-cols-3 text-xs items-center lg:gap-1 grid-cols-1 space-y-2">
        <Link href="/">
          <a>
            <div className="flex items-center flex-row">
              <span className={linkClassName}>{`Home`}</span>
            </div>
          </a>
        </Link>
        <Link href="/about">
          <a>
            {" "}
            <div className="flex  flex-row ">
              <span className={linkClassName}>{`About`}</span>
            </div>
          </a>
        </Link>
        <Link href="/work">
          <a>
            <div className="flex items-center flex-row">
              <span className={linkClassName}>{`Work`}</span>
            </div>
          </a>
        </Link>{" "}
        <Link href="/blog">
          <a>
            <div className="flex items-center flex-row">
              <span className={linkClassName}>{`Blog`}</span>
            </div>
          </a>
        </Link>
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

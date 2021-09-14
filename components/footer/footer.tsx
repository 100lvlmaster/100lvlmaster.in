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
    <div className="w-full max-w-xl ">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-8" />
      <div className="grid w-full max-w-xl grid-cols-2 md:grid-cols-3 items-start gap-1 text-base justify-items-start place-content-start justify-start lg:gap-1">
        <NextLink href="/">
          <a>
            <span className={linkClassName}>{`Home`}</span>
          </a>
        </NextLink>
        <NextLink href="/about">
          <a>
            <span className={linkClassName}>{`About`}</span>
          </a>
        </NextLink>
        <NextLink href="/work">
          <a>
            <span className={linkClassName}>{`Work`}</span>
          </a>
        </NextLink>{" "}
        <NextLink href="/blog">
          <a>
            <span className={linkClassName}>{`Blog`}</span>
          </a>
        </NextLink>
        <ExternalLink href={`https://dev.to/100lvlmaster`}>
          <span className={linkClassName}>{`Dev.to`}</span>
        </ExternalLink>{" "}
        <ExternalLink href={`https://discordapp.com/users/392213395031719957/`}>
          <span className={linkClassName}>{`Discord`}</span>
        </ExternalLink>
        <ExternalLink href={`https://github.com/100lvlmaster`}>
          <span className={linkClassName}>Github</span>
        </ExternalLink>
        <ExternalLink href={`mailto: navinkodag@gmail.com`}>
          <span className={linkClassName}>Gmail</span>
        </ExternalLink>
        <ExternalLink href={`https://www.linkedin.com/in/navin-kodag/`}>
          <span className={linkClassName}>{`LinkedIn`}</span>
        </ExternalLink>
        <ExternalLink href={`https://100lvlmaster.medium.com/`}>
          <span className={linkClassName}>{`Medium`}</span>
        </ExternalLink>
        <ExternalLink href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}>
          <span className={linkClassName}>{`Youtube`}</span>
        </ExternalLink>
      </div>
    </div>
  );
};

import Link from "next/link";
export const Footer = () => {
  return (
    <div className="flex flex-col pb-10 space-y-2">
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
      <a target="_blank" href="https://medium.com/@100lvlmaster">
        <span>Medium</span>
      </a>
      <a href="https://github.com/100lvlmaster" target="_blank">
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/navin-kodag/" target="_blank">
        <span>LinkedIn</span>
      </a>
      <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <span>Youtube</span>
      </a>
    </div>
  );
};

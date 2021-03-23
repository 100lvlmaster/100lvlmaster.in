import { ToggleThemeButton } from "./toggle_theme_button";

export const NavBar = () => {
  return (
    <div className="flex flex-row p-10 items-center">
      <ToggleThemeButton />
      <div className="flex-grow"></div>
      <span className="pl-5">about</span>
      <span className="pl-5">contact</span>
      <span className="pl-5">work</span>
    </div>
  );
};

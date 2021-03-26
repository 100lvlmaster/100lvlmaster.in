import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
export const Container = (props) => {
  return (
    <div
      id={props.id}
      className={"dark:bg-black w-4/5 dark:text-white flex flex-col w-screen text-black bg-white".concat(
        props.className
      )}
    >
      <NavBar />
      <div className="flex flex-col h-screen p-10 pt-20">{props.children}</div>
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

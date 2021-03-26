import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
export const Container = (props) => {
  return (
    <div
      id={props.id}
      className={
        "dark:bg-black dark:text-white text-black bg-white md:pl-80 md:pr-80"
      }
    >
      <NavBar />
      <div
        className={
          "flex flex-col justify-items-stretch p-10 pt-28 " + props.className
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

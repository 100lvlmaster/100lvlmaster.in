import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
export const Container = (props) => {
  return (
    <div
      id={props.id}
      className="dark:bg-black flex flex-col dark:text-white text-black w-screen bg-white items-stretch justify-items-stretch"
    >
      <NavBar />
      <div
        className={"flex flex-col justify-items-stretch md:px-40 lg:px-80 text-lg pt-28 p-10"
          .concat(" ")
          .concat(props.className)}
      >
        {props.children}
      </div>
      {props.showFooter ?? true ? (
        <Footer className="p-10 md:px-40 lg:px-80" />
      ) : (
        ``
      )}
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

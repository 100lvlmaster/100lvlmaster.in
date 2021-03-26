export const Container = (props) => {
  return (
    <div className="dark:bg-black dark:text-white text-black bg-white">
      <div className="flex flex-col h-screen p-10 ">{props.children}</div>
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;

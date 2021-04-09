export const Timeline = (props) => {
  return <div className="flex flex-col-reverse pt-10">{props.children}</div>;
};
export const Milestone = (props) => {
  return (
    <div className="flex flex-row items-stretch text-sm text-gray-600 dark:text-gray-300">
      {/* dot and progress line */}
      <div className="flex flex-col mr-3 pr-3 items-center progress-line">
        <div className="dark:text-white text-black ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
          </svg>
        </div>
        <div className="bg-black flex-grow dark:bg-white mx-2 w-1" />
      </div>
      {/* text-> title and description */}
      <div className="flex flex-col flex-grow">
        <div className="text-sm">{props.date}</div>
        <div className="text-lg text-black dark:text-white py-2">
          {props.title}
        </div>
        <div className="flex-grow text-sm dark:text-gray-400 text-gray-600">
          {props.description}
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
};

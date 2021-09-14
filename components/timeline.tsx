interface MilstoneProps {
  date: string;
  title: string;
  subtitle: string;
  description: any;
}
const Timeline = ({ children }) => {
  return <div className="flex flex-col-reverse pt-10">{children}</div>;
};
const Milestone = ({ date, title, subtitle, description }: MilstoneProps) => {
  return (
    <div className="flex flex-row items-stretch text-base text-gray-600 dark:text-gray-300">
      {/* dot and progress line */}
      <div className="flex flex-col mr-3 pr-3 items-center progress-line">
        <div className="dark:text-white text-black ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
          </svg>
        </div>
        <div className="bg-black flex-grow dark:bg-white mx-2 w-0.5 rounded-lg" />
      </div>
      {/* text-> title and description */}
      <div className="flex flex-col flex-grow">
        <div className="text-sm">{date}</div>
        <div className="text-base text-black font-bold dark:text-white py-2">
          {title}
          {subtitle ? (
            <div className="text-gray-400 font-medium">{subtitle}</div>
          ) : (
            ""
          )}
        </div>
        <div className="flex-grow text-sm dark:text-gray-400 text-gray-600">
          {description}
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
};

export const TimelineComponent = () => (
  <Timeline>
    <Milestone
      date={"June/2019"}
      title={"Started pursuing a Bachelor's degree in computer science"}
      subtitle={`PCACS`}
      description={
        "The time i had been waiting since 10th grade, who needs chemistry when i can make a twitter bot tweet memes for me. Twitter meme-bot goes brrrrr."
      }
    />
    <Milestone
      date={"July/2020"}
      title={"Intern"}
      subtitle={`mybytecode`}
      description={
        <ul className="list-disc space-y-2">
          <li>
            {` Worked on flutter with MVC architecture to make authentication
        modules.`}
          </li>
          <li>
            {` Helped to create and maintain a product similar to inshorts
        and hacker news`}
          </li>
          <li>
            {`Used laravel to paginate REST API responses, reducing load
        times by 60% 💨`}
          </li>
          <li>{`Used ffmpeg to complete media manipulation operation`} </li>
          <li>
            {`Used firebase to design and create a realtime social media app`}
          </li>
        </ul>
      }
    />
    <Milestone
      date={`October/2020`}
      title={`SDE`}
      subtitle={"mybytecode"}
      description={
        <ul className="list-disc space-y-2">
          <li>
            {`Utilized GraphQL to reduce over-fetching and under-fetching of data by 75% 🚀`}
          </li>
          <li>
            {`Handled development of two front-end mobile clients and a node.js backend 💯`}
          </li>
          <li>
            {`Combined MVC and BLoC for the architecture of the mobile client created in Flutter`}
          </li>
        </ul>
      }
    ></Milestone>
    <Milestone
      date={`April/2020`}
      subtitle={"RedCarpetUp"}
      title={`SDE`}
      description={<ul className="list-disc space-y-2"></ul>}
    ></Milestone>
  </Timeline>
);

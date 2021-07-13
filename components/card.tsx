import NextImage from "next/image";
const Card = (props) => {
  return (
    <div
      className={
        "border border-gray-200 dark:border-gray-800 m-1 rounded hover:shadow-md text-xs"
      }
      key={props.guid}
    >
      <a rel="noreferrer" href={props.href} target="_blank_">
        <div className="p-3">
          <div className="relative h-24 w-24 md:h-22 md:w-22 object-contain">
            <NextImage
              src={props.thumbnail}
              layout="fill"
              className={"rounded"}
              alt={`${props.thumbnail}`}
            />
          </div>
          <div className=" flex flex-row py-4 text-gray-600 dark:text-gray-400">
            <div className={`flex flex-col text-xs flex-grow`}>
              <span
                className={`text-black dark:text-white font-medium text-lg`}
              >
                {props.title}
              </span>
              <span>{props.description}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;

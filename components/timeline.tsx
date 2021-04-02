export const Timeline = (props) => {
  return <div className="flex flex-col-reverse pt-10">{props.children}</div>;
};
export const Milestone = (props) => {
  return (
    <div className="flex flex-row items-stretch text-sm text-gray-600 dark:text-gray-300">
      {/* dot and progress line */}
      <div className="flex flex-col mr-3 pr-3 progress-line">
        <div className="dark:text-white text-black ">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 191.667 191.667"
            fill="currentColor"
          >
            <path
              d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z
	 M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685
	c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971
	l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969
	C156.146,65.765,156.146,74.362,150.862,79.646z"
            />
          </svg>
        </div>
        <div className="bg-black flex-grow dark:bg-white mx-2 w-1 rounded" />
      </div>
      {/* text-> title and description */}
      <div className="flex flex-col flex-grow">
        <div className="text-sm">{props.date}</div>
        <div className="text-lg py-2">{props.title}</div>
        <div className="flex-grow text-sm dark:text-gray-400 text-gray-600">
          {props.description}
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
};

export const PulseLoader = (props) => {
  return (
    <div
      className={`animate-pulse bg-gray-400  rounded my-2`
        .concat(" ")
        .concat(props.className)}
    >
      {props.children}
    </div>
  );
};

//
const ToggleThemeButton = (props) => {
  return (
    <div
      onClick={props.onToggle}
      className="p-2 rounded dark:bg-gray-800 bg-gray-200 select-none"
    >
      <img height="20" width="20" src={props.imgUrl}></img>
    </div>
  );
};
export default ToggleThemeButton;

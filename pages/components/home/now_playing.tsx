import { getNowPlaying } from "../../../lib/spotify";
import { useState, useEffect } from "react";
export const NowPlaying = () => {
  const [data, setData] = useState("adas");
  const getData = async () => {
    const val = await getNowPlaying();
    setData(`${val}`);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <span>{data}</span>
    </div>
  );
};

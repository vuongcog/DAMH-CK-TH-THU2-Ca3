import React from "react";
import { useStateContext } from "../../context/StateContextProvider";
import ListFilm from "../hompage/ListFilm";
import ListCardFirm from "./ListCardFirm";
import { useEffect } from "react";

const Pagefilm = () => {
  const { phim, getPhim } = useStateContext();
  const { typeFilm, handleChangeFirlm } = useStateContext();
  useEffect(() => {
    getPhim();
  }, []);
  console.log(typeFilm);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center ">
        <ListFilm onHandleChange={handleChangeFirlm}></ListFilm>
      </div>
      <ListCardFirm value={typeFilm} listfilm={phim}></ListCardFirm>
    </div>
  );
};
export default Pagefilm;

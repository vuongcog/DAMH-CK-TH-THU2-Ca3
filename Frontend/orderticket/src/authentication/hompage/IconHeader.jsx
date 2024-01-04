import React from "react";
import { c } from "../../assets";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContextProvider";
const IconHeader = () => {
  const { theme } = useStateContext();
  return (
    <div
      className={`${
        theme ? "text-white" : ""
      } px-[100px] border-r-[1px] border-solid border-[#424242FF] flex justify-center h-full items-center w-[272px]`}
    >
      <img src={c} className="cursor-pointer h-[50px] w-[100px]"></img>
      <Link to={"/"} className="font-semibold text-[25px] ">
        CINESTAR
      </Link>
    </div>
  );
};

export default IconHeader;

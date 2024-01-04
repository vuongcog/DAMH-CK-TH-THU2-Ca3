import React, { useEffect, useState } from "react";
import VauleSegmented from "./VauleSegmented";
import ListFilm from "./ListFilm";
import { useStateContext } from "../../context/StateContextProvider";
import { Carousel } from "antd";

const Content = () => {
  const { phim, setPhim, getPhim } = useStateContext();
  const [firlm, setFilm] = useState("phimdangchieu");
  const onHandleChange = (value) => {
    setFilm(value);
  };
  useEffect(() => {
    getPhim();
  }, []);
  return (
    <div className="h-full w-full ">
      <div className="border-solid rotate-[125deg] relative border-[1px] border-[black]"></div>
      <h1 className="font-serif font-bold text-[68px] text-[#000000E0]">
        Ciner Star
      </h1>
      <p className="font-sans text-[24px] text-[#000000E0] font-medium text-center">
        Hãy đồng hành cùng chungs tôi, bạn sẽ được trải nghiệm dịch vụ một cách
        tuyệt vời nhất.
      </p>
      <div className="border-solid border-[1px] border-[black]"></div>
      <div className="mt-[80px] w-full flex justify-center">
        <ListFilm onHandleChange={onHandleChange}></ListFilm>
      </div>
      <VauleSegmented value={firlm} listphim={phim}></VauleSegmented>
      <h1 className="text-center pt-[48px]">Event</h1>
    </div>
  );
};
export default Content;

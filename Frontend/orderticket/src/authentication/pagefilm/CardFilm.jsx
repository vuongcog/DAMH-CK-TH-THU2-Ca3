import React from "react";
import { phim } from "../../data/data";
import { Card, Divider } from "antd";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContextProvider";
const CardFilm = ({ type }) => {
  const { handleInfoFilm, theme } = useStateContext();
  return (
    <div className="h-[]">
      <Card
        className={`cursor-pointer h-[480px] ${
          theme ? "" : "bg-[#001529] text-white border-[#001529] border-[4px]"
        } `}
        cover={
          <Link
            onClick={() => {
              handleInfoFilm(type);
            }}
            to={"/Info"}
          >
            <img
              alt="phim"
              className="w-[300px] h-[300px] object-cover"
              src={type.url}
            ></img>
          </Link>
        }
      >
        <h1 className="text-[20px] font-bold text-center">{type.tenphim}</h1>
        <h1 className="text-center font-bold my-5">
          Quốc gia : {type.quocgia}
        </h1>
        <h1 className="text-center font-bold ">
          Thời lượng : {type.thoiluong}
        </h1>
      </Card>
    </div>
  );
};
export default CardFilm;

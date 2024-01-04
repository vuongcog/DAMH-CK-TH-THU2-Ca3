import { Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContextProvider";

const VauleSegmented = ({ children, value, listphim }) => {
  let [i, setI] = useState(0);
  const { handleInfoFilm } = useStateContext();
  listphim?.map((item) => {
    if (item.statephim === value) {
      i = i + 1;
    }
  });
  console.log(i);
  return (
    <div className="mt-[80px]">
      <Carousel slidesToShow={i > 4 ? 4 : i} autoplay>
        {listphim?.map((item, index) => {
          if (item.statephim === value)
            return (
              <div className=" bg-black" key={index}>
                <Card
                  className="bg-[#434343] "
                  cover={
                    <img
                      className="rounded-none w-full h-[360px] object-cover"
                      src={item.url}
                    ></img>
                  }
                >
                  <h1 className="font-bold text-center text-[#bfbfbf]">
                    {item.tenphim}
                  </h1>
                  <h1 className="text-center font-semibold my-5 text-[#bfbfbf]">
                    Quốc gia : {item.quocgia}
                  </h1>
                  <h1 className="text-center font-semibold mb-3 text-[#bfbfbf]">
                    Thời lượng : {item.thoiluong}
                  </h1>
                  <Link
                    onClick={() => {
                      handleInfoFilm(item);
                    }}
                    to={"/Info"}
                    className="text-center text-[24px] font-bold text-white"
                  >
                    Đặt vé
                  </Link>
                </Card>
              </div>
            );
        })}
      </Carousel>
    </div>
  );
};
export default VauleSegmented;

import React from "react";
import InfomationTicker from "./InfomationTicker";
import { useStateContext } from "../../context/StateContextProvider";
import { useEffect } from "react";

const Quanlyve = () => {
  const { getAPIHoaDon, hoadon, setHoadon, theme, deleteDH, setDeleteDonHang } =
    useStateContext();
  const data = [
    "Tên vé",
    "Giá vé",
    "Ngày mua",
    "Ngày chiếu",
    "Thời lượng",
    "Trạng thái",
    "Số lượng",
    "Số phòng",
    "",
  ];
  console.log(hoadon);
  useEffect(() => {
    getAPIHoaDon();
  }, [localStorage.getItem("user"), deleteDH]);
  return (
    <div className="py-[80px]">
      <div
        className={`${
          theme ? "" : "bg-[#001529] text-white"
        } p-[24px] rounded-[16px] border-[#8c8c8c] border-[1px]`}
      >
        <h1 className="text-[32px] font-semibold">Quản lý vé</h1>
        <div className="flex justify-between items-center rounded-[8px] p-[16px] bg-[#f6f6f6]">
          {data.map((item, index) => {
            return (
              <h1
                key={index}
                className={`font-semibold w-[${
                  item === "Tên vé" ? "500px" : "200px"
                }] text-[#000000A6]`}
              >
                {item}
              </h1>
            );
          })}
        </div>
        <div className="mt-[8px]">
          <InfomationTicker Ticker data={hoadon}></InfomationTicker>
        </div>
      </div>
    </div>
  );
};

export default Quanlyve;

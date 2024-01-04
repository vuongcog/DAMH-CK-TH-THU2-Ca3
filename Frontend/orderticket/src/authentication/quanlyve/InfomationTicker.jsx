import { Avatar, Button, theme } from "antd";
import React, { useState } from "react";
import { useStateContext } from "../../context/StateContextProvider";
import axios from "axios";
import { useEffect } from "react";

const InfomationTicker = ({ data }) => {
  const { theme, deleteDH, setDeleteDonHang } = useStateContext();
  // const [deleteDH, setDeleteDonHang] = useState(false);
  const deleteDonHang = async (item) => {
    try {
      const response = await axios.post(
        "http://localhost/test/deletedonhang.php",
        {
          madh: item.madh,
        }
      );
      setDeleteDonHang(!deleteDH);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              !theme ? "bg-[#434343]" : ""
            } rounded-[8px] flex font-semibold justify-between items-center mt-10`}
          >
            <div className="w-[500px]">
              <Avatar
                className="border-[1px] border-[black] w-[80px] rounded-2xl h-[80px] object-cover"
                src={item.url}
              ></Avatar>
              <span className="ml-[16px]">{item.tenphim}</span>
            </div>
            <div className="font-bold w-[200px]">{item.dongia} VND</div>
            <div className="font-bold w-[200px]">{item.ngaylapdon}</div>
            <div className="font-bold w-[200px]">{item.tgbd}</div>
            <div className="font-bold w-[200px]">{item.thoiluong}</div>
            <div className="font-bold w-[200px]">Chưa xem</div>
            <div className="font-bold w-[200px]">{item.soluong}</div>
            <div className="font-bold w-[200px]">{item.tenphong}</div>
            <div className="font-bold w-[200px]">
              <Button
                onClick={() => {
                  deleteDonHang(item);
                }}
              ></Button>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfomationTicker;

import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContextProvider";
import { Button, Empty, InputNumber, Select, Space } from "antd";
import { BeakerIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import { Link, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  ClockIcon,
  PlusCircleIcon,
  CurrencyPoundIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { DollarCircleFilled } from "@ant-design/icons";
const InforFilm = () => {
  const { handleGuiDonHang } = useStateContext();
  const [suatchieu, setSuatChieu] = useState();
  const [hinhthuc, setHinhthuc] = useState();
  const [soluong, setSoluong] = useState(1);
  const [giatien, setGiatien] = useState(null);
  const [ngaychieu, setNgaychieu] = useState();
  const [ghe, setGhe] = useState();
  const [vitri, setVitri] = useState(null);
  const [state, setState] = useState(false);

  const selectHinhThuc = (value) => {
    setHinhthuc(value);
    if (value === "2D") setGiatien(phimInfo?.[0]?.giaphim);
    else if (value === "3D") setGiatien(phimInfo?.[0]?.giaphim * 1.5);
  };
  console.log(hinhthuc);
  const { getAPISuatChieu, phimInfo } = useStateContext();
  let phim = JSON.parse(localStorage.getItem("idFilm"));
  const hanleChaneTotalNumbler = (value) => {
    setSoluong(value);
    console.log(soluong);
  };
  const haneClickGhe = () => {
    if (phimInfo[0].danhsachghe) {
      // let ghe = JSON.parse(phimInfo[0].danhsachghe);
      setGhe(JSON.parse(phimInfo[0].danhsachghe));
      setState(!state);
    } else {
      setGhe("Khong ton tai");
      console.log(ghe);
    }
  };

  useEffect(() => {
    getAPISuatChieu(phim.maphim);
  }, []);
  let a = phimInfo?.[0]?.masc + "";
  return (
    <div className="flex gap-x-10">
      <div className="bg-[#000000A6] text-[#d9d9d9] font-bold flex justify-start items-start flex-col p-[24px] rounded-l-[24px]">
        <div className="flex">
          <ClockIcon className="mr-2 h-[20px] w-[20px]"></ClockIcon>
          <span className="font-bold inline-block w-[100px]">Thời gian : </span>
          <Select
            className="w-[300px]"
            onSelect={(value) => {
              setSuatChieu(value);
              console.log(ngaychieu);
            }}
            options={phimInfo?.map((item, index) => {
              console.log(item.masc);
              return {
                value: item.masc,
                label: item.tgbd + " / " + item.tgkt,
              };
            })}
          />
        </div>
        <div className="flex">
          <PlusCircleIcon className="mr-2 h-[20px] w-[20px]"></PlusCircleIcon>
          <span className="font-bold inline-block w-[100px]">Số lượng : </span>
          <InputNumber
            min={1}
            max={20}
            size="large"
            className="w-[full] "
            defaultValue={1}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={hanleChaneTotalNumbler}
          />
        </div>
        <div className="flex">
          <BeakerIcon className="mr-2 h-[20px] w-[20px]"></BeakerIcon>
          <span className="font-bold inline-block w-[100px]">Hình thức </span>
          <Select
            onChange={selectHinhThuc}
            className="w-[300px]"
            options={phimInfo?.map((item, index) => {
              return { value: item.hinhthuc, label: item.hinhthuc };
            })}
          />
        </div>

        <div className="flex ">
          <CurrencyPoundIcon className="mr-2 h-[20px] w-[20px]"></CurrencyPoundIcon>
          <span className="inline-block w-[100px]  font-bold">Giá phim</span>
          <span>{giatien === null ? phimInfo?.[0].giaphim : giatien}</span> VND
        </div>
        <div className="flex">
          <DollarCircleFilled className="mr-2 h-[20px] w-[20px]"></DollarCircleFilled>

          <span className="w-[100px] font-bold ">Tổng tiền </span>
          <span>{giatien * soluong}</span>
        </div>
        <div className="flex items-center">
          <TableCellsIcon className="mr-2 h-[20px] w-[20px]"></TableCellsIcon>
          <h1 className=" font-bold">Chọn ghế :</h1>
          <span className={`${state ? "hidden" : ""} mx-[10px]`}>{vitri}</span>
          <div
            className={`mx-[10px] h-[24px]  w-[24px] rounded-sm bg-[#d9d9d9] rounded-2xl border-[#fafafa] border-[1px]`}
            onClick={haneClickGhe}
          >
            <div
              className={`ml-[24px] w-[300px] ${
                state ? "" : "hidden"
              } flex flex-wrap`}
            >
              {ghe?.map((item, index) => {
                return (
                  <div
                    onClick={(e) => {
                      setVitri(e.target.textContent);
                      console.log(vitri);
                    }}
                    key={index}
                    className="bg-white w-[40px] h-[40px] text-center border-[1px] border-[#fafafa] rounded-2xl"
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-[16px]">
          <Button
            onClick={() => {
              if (localStorage.getItem("user")) {
                if (ghe && giatien && hinhthuc) {
                  const token = jwtDecode(localStorage.getItem("user"));
                  console.log(token.data.iduser);
                  const objDonhang = {
                    iduser: token.data.iduser,
                    masc: suatchieu,
                    soluong: soluong,
                    dongia: giatien,
                    hinhthuc,
                    tongtien: giatien * soluong,
                    ghe: vitri,
                    ngaylapdon: new Date().toLocaleString(),
                    maphim: phimInfo?.[0]?.maphim,
                  };
                  console.log(objDonhang);
                  handleGuiDonHang(objDonhang);
                  alert("Đặt thành công");
                } else {
                  alert("Điền đầy đủ thông tin");
                }
              } else {
                alert("Cần đăng nhập");
              }
            }}
            className={`w-[160px] bg-[#d9d9d9] font-medium ${
              state ? "hidden" : ""
            }`}
          >
            Đặt vé
          </Button>
        </div>
      </div>
      <div className="flex p-[10px] bg-[#000000A6] border-solid rounded-r-[24px] ">
        <img
          className="w-[320px]  rounded-l-[16px]"
          src={phimInfo?.[0]?.url}
          alt=""
        />
        <div className="w-[320px] text-white p-[16px]">
          <h1 className="font-bold text-[32px]">{phimInfo?.[0]?.tenphim}</h1>

          <h1 className="flex">
            <h1 className="font-bold">Mô tả </h1> :{" "}
            {phimInfo?.[0]?.gioithieuphim}
          </h1>
          <h1>
            {phimInfo?.[0].statephim === "phimdangchieu"
              ? "Phim đang chiếu"
              : ""}
          </h1>

          <h1>Quốc gia : {phimInfo?.[0].quocgia}</h1>
        </div>
      </div>
    </div>
  );
};
export default InforFilm;

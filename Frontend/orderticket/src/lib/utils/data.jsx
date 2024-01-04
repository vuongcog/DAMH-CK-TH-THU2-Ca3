import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  ArrowUpOnSquareIcon,
  Cog6ToothIcon,
  TicketIcon,
  HomeIcon,
  EyeIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
export const itemsMenu = [
  {
    label: (
      <Link className={"w-[100px] h-[100px]"} to={"/"}>
        Home
      </Link>
    ),
    icon: <HomeIcon className="w-[1em] h-[1em]"></HomeIcon>,
  },
  {
    title: "dangnhap",
    label: (
      <Link className={``} to={"/signin"}>
        Đăng nhập
      </Link>
    ),
    icon: <ArrowRightOnRectangleIcon className={`w-[1em] h-[1em]`} alt="" />,
  },
  {
    label: <Link to={"/pagefilm"}>Xem phim</Link>,
    icon: <ArrowRightOnRectangleIcon className="w-[1em] h-[1em]" alt="" />,
  },
  {
    title: "dangnhap",
    label: <Link to={"/signup"}>Đăng ký</Link>,
    icon: <PlusCircleIcon className="w-[1em] h-[1em]" PlusCircleIcon />,
  },
  {
    label: <Link to={"/quanlyve"}>Quản lý vé</Link>,
    icon: <TicketIcon className="w-[1em] h-[1em]" />,
  },
  {
    title: "dangxuat",
    label: <h1>Đăng xuất</h1>,
    icon: (
      <ArrowLeftOnRectangleIcon className="w-[1em] h-[1em]"></ArrowLeftOnRectangleIcon>
    ),
  },
  {
    label: "Phim sắp ra mắt",
    icon: (
      <ArrowUpOnSquareIcon className="w-[1em] h-[1em]"></ArrowUpOnSquareIcon>
    ),
  },
  {
    label: "Setting",
    icon: <Cog6ToothIcon className="w-[1em] h-[1em]"></Cog6ToothIcon>,
  },
];

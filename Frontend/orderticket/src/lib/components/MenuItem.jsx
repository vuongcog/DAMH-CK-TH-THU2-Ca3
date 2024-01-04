import { Menu } from "antd";
import React from "react";
import { itemsMenu } from "../utils/data";
import { useState } from "react";
import { useStateContext } from "../../context/StateContextProvider";
import { useEffect } from "react";
function MenuItem() {
  const { state, setState, theme, handleDangXuat } = useStateContext();

  return (
    <Menu
      className="h-full border-r-[1px] border-solid border-[#424242FF]"
      theme={`${theme ? "dark" : "light"}`}
      mode="inline"
    >
      {itemsMenu.map((items, index) => {
        return (
          <Menu.Item
            onClick={() => {
              handleDangXuat(items);
            }}
            className={`font-bold mt-[24px] ${
              localStorage.getItem("user") &&
              (items.title === "dangnhap" || items.title === "dangky")
                ? "hidden"
                : ""
            }`}
            icon={items.icon}
            key={index}
          >
            {items.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default MenuItem;

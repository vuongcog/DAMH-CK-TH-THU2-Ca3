import { Input, Menu } from "antd";
import React from "react";
import { itemsMenu } from "../../lib/utils/data";
import { SearchOutlined } from "@ant-design/icons";
import { useStateContext } from "../../context/StateContextProvider";
export const SearchHeader = () => {
  return <div></div>;
};
export const Navigation = () => {
  const { theme } = useStateContext();
  return (
    <Menu
      theme={`${theme ? "dark" : "light"}`}
      className=" w-[600px]"
      mode="horizontal"
    >
      {itemsMenu.map((items, index) => {
        return (
          <Menu.Item className="font-bold" icon={items.icon} key={index}>
            {items.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

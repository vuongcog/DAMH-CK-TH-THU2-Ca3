import React from "react";
import CardFilm from "./CardFilm";
import { Col, Row } from "antd";
import { useStateContext } from "../../context/StateContextProvider";
import { phim } from "../../data/data";

const ListCardFirm = ({ value, listfilm, children }) => {
  return (
    //
    <div className="grid grid-cols-4 grid-rows-4 gap-2">
      {listfilm?.map((items, index) => {
        if (items.statephim === value) {
          return <CardFilm type={items}></CardFilm>;
        }
      })}
    </div>
  );
};

export default ListCardFirm;

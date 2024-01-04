import { Segmented } from "antd";
import React from "react";
const ListFilm = ({ onHandleChange }) => {
  return (
    <Segmented
      className="mb-[80px]"
      onChange={onHandleChange}
      options={[
        {
          label: (
            <div
              className="h-[64px] flex justify-center items-center w-[200px]"
              style={{ padding: 4 }}
            >
              <div className="font-bold text-[24px]">Phim đang chiếu</div>
            </div>
          ),
          value: "phimdangchieu",
        },
        {
          label: (
            <div
              className="flex justify-center h-[64px] items-center w-[200px]"
              style={{ padding: 4 }}
            >
              <div className="font-bold text-[24px]">Phim sắp chiếu</div>
            </div>
          ),
          value: "phimsapchieu",
        },
        {
          label: (
            <div
              className="h-[64px] flex justify-center items-center w-[200px]"
              style={{ padding: 4 }}
            >
              <div className="font-bold text-[24px]">Phim đặc biệt</div>
            </div>
          ),
          value: "phimdacbiet",
        },
      ]}
    />
  );
};
export default ListFilm;

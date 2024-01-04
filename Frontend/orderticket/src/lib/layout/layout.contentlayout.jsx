import { Switch } from "antd";
import React from "react";
import { useStateContext } from "../../context/StateContextProvider";

const ContentLayout = ({ children }) => {
  const { theme, setTheme } = useStateContext();
  return (
    <div className="h-full overflow-scroll w-full px-[64px] pt-[40px] bg-[##bae7ff] overflow-x-hidden">
      <Switch
        className={`${
          theme
            ? "bg-black"
            : "bg-white border-[1px] border-[#001529] border-solid"
        }`}
        onChange={() => {
          setTheme(!theme);
          console.log(theme);
        }}
      ></Switch>
      {children}
    </div>
  );
};

export default ContentLayout;

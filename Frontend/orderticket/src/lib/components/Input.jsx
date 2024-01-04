import { Input as AntdInput } from "antd";
import React from "react";

import { cn } from "../utils/utils";
function Input({ props, className, onChange }) {
  return (
    <AntdInput
      onChange={onChange}
      {...props}
      className={cn(
        ` border-black  w-[150px] h-[20px]  focus:shadow-none  hover:border-black `,
        className
      )}
    ></AntdInput>
  );
}

export default Input;

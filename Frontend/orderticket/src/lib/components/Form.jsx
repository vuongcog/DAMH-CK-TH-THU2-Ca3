import React from "react";
import { cn } from "../utils/utils";
import { Form as FormC } from "antd";

function Form({ props, children, className }) {
  return (
    <div>
      <FormC
        {...props}
        className={cn(
          "w-[500px] rounded-md  border-gray-800 border-solid border-[1px] h-[500px] ",
          className
        )}
      >
        {children}
      </FormC>
    </div>
  );
}

export default Form;

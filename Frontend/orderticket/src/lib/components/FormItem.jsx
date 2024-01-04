import React from "react";
import { cn } from "../utils/utils";
import { Form } from "antd";

function FormItem({ label, children, props, className }) {
  return (
    <Form.Item label={label} {...props} className={cn("cn", className)}>
      {children}
    </Form.Item>
  );
}

export default FormItem;

import React, { useState } from "react";
import axios from "axios";
import { Button, ConfigProvider } from "antd";
const Login = () => {
  const getPhim = async () => {
    const response = await axios.get(
      "http://huynhnhatvuong.infinityfreeapp.com/test2/getphim.php"
    );
    console.log(response.data);
  };
  getPhim();
  return <div></div>;
};

export default Login;

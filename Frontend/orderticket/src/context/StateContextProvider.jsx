import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "react-router-dom";
const StateConext = createContext();
export const StateContextProvider = ({ children }) => {
  const registerUser = async (usernameRe, passwordRe, emailRe) => {
    try {
      const response = await axios.post(
        "http://localhost/test/register.php",
        {
          emailRe,
          usernameRe,
          passwordRe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (!response.data) {
        alert("Đã tồn tại tài khoản này");
      } else alert("Đăng ký thành công");
    } catch (error) {
      console.log(error);
    }
  };
  const getAPIHoaDon = async () => {
    if (localStorage.getItem("user")) {
      const token = jwtDecode(localStorage.getItem("user"));
      try {
        const response = await axios.post(
          "http://localhost/test/getdonhang.php",
          {
            iduser: token.data.iduser,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        SetHoadon(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleGuiDonHang = async (objDonhang) => {
    try {
      const response = await axios.post(
        "http://localhost/test/nhandonhang.php",
        {
          data: objDonhang,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeFirlm = (value) => {
    setTypeFilm(value);
  };
  const [deleteDH, setDeleteDonHang] = useState(false);
  const [typeFilm, setTypeFilm] = useState("phimdangchieu");
  const [idFilm, setIdfilm] = useState();
  const [user, setUser] = useState(null);
  const [phim, setPhim] = useState(null);
  const [phimInfo, setPhimInfo] = useState(null);
  const [state, setState] = useState(true);
  const [hoadon, SetHoadon] = useState(null);
  const [theme, setTheme] = useState(true);
  const handleDangXuat = async (items) => {
    if (localStorage.getItem("user") && items.title === "dangxuat") {
      if (localStorage.getItem("user")) {
        const token = jwtDecode(localStorage.getItem("user"));
        axios.post("http://localhost/test/dangxuat.php", {
          user: token.data.iduser,
        });
        localStorage.removeItem("user");
        setState(!state);
        console.log(state);
        SetHoadon(null);
      }
    }
  };

  const getAPISuatChieu = async (phim) => {
    const response = await axios.post(
      "http://localhost/test/getsuatchieu.php",
      {
        idFilm: phim,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors", // Thêm mode ở đây
      }
    );
    const jsonString = response.data.substring(10);
    const parsedData = JSON.parse(jsonString);

    setPhimInfo(parsedData);
    console.log(parsedData);
    console.log(parsedData.ghe);
    // console.log(response.data);
    // setPhimInfo(JSON.parse(response.data));
  };
  const handleInfoFilm = (type) => {
    localStorage.setItem("idFilm", JSON.stringify(type));
  };

  const getPhim = async () => {
    const response = await axios.get("http://localhost/test/getphim.php");
    console.log(response);
    setPhim(response.data);
  };
  const checkUser = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost/test/validateacount.php",
        {
          username,
          password,
        }
      );
      // Gọi hàm để lấy thông tin người dùng sau khi đăng nhập thành công
      if (response.data.token) {
        localStorage.setItem("user", response.data.token);
        setState(!state);
        console.log(response.data);
        alert("Đăng nhập thành công");
      } else {
        alert("Đăng nhập thất bại");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
      return { success: false };
    }
  };
  return (
    <StateConext.Provider
      value={{
        deleteDH,
        setDeleteDonHang,
        theme,
        setTheme,
        registerUser,
        hoadon,
        SetHoadon,
        getAPIHoaDon,
        handleDangXuat,
        state,
        setState,
        phimInfo,
        getAPISuatChieu,
        phim,
        setPhim,
        getPhim,
        user,
        setUser,
        checkUser,
        typeFilm,
        setTypeFilm,
        handleChangeFirlm,
        idFilm,
        setIdfilm,
        handleInfoFilm,
        handleGuiDonHang,
      }}
    >
      {children}
    </StateConext.Provider>
  );
};
export const useStateContext = () => useContext(StateConext);

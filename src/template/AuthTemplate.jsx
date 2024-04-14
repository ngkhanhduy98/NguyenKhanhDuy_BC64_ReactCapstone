import React, { useEffect } from "react";
import LoginGIF from "../asset/LoginGIF.json";
import Lottie from "lottie-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AuthTemplate = () => {
  const { userInfor } = useSelector((state) => state.userReducer);
  console.log("userInfor: ", userInfor);
  const navigate = useNavigate();
  // Nếu infoUser có tồn tại => đã đăng nhập => đá về trang chủ
  useEffect(() => {
    if (userInfor) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex w-screen h-screen">
      <NavLink
        to={"/"}
        className="absolute top-10 left-16 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
      >
        TicketBox
      </NavLink>
      <div className="w-1/2 scale-75 flex justify-center items-center">
        <Lottie animationData={LoginGIF}></Lottie>
      </div>
      <div className="w-3/4 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;

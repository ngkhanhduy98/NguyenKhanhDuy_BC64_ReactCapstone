import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/userReducer/userThunk";
import { message } from "antd";
import Swal from "sweetalert2";
const LoginPage = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { userInfor } = useSelector((state) => state.userReducer);
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: async (value) => {
      try {
        const promise = await dispacth(loginThunk(value));
        console.log("🤪 ~ onSubmit: ~ promise:", promise);
        if (promise.payload != undefined) {
          Swal.fire({
            title: "Đăng nhập thành công",
            text: "Bạn sẽ được chuyển về trang chủ",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            title: "Đăng nhập thất bại",
            text: "Vui lòng thử lại",
            icon: "error",
            timer: 2000,
            timerProgressBar: true,
          });
        }
      } catch (error) {}
    },
    // onSubmit: async (value) => {
    //   dispacth(loginThunk(value)).then(() => {

    //   });
    // },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống")
        .min(4, "Tài khoản ít phải là 4 chữ cái"),
      matKhau: yup
        .string()
        .required("Mật khẩu không được để trống")
        .min(4, "Mật khẩu ít phải là 4 chữ cái"),
    }),
  });
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Đăng nhập
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          action=""
          onSubmit={formLogin.handleSubmit}
        >
          <div>
            <label
              htmlFor="taiKhoan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tài khoản
            </label>
            <input
              onChange={formLogin.handleChange}
              name="taiKhoan"
              id="taiKhoan"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tài khoản của bạn"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.taiKhoan}
            </p>
          </div>
          <div>
            <label
              htmlFor="matKhau"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mật khẩu
            </label>
            <input
              onChange={formLogin.handleChange}
              type="password"
              name="matKhau"
              id="matKhau"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.matKhau}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Quên mật khẩu ?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đăng nhập
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Chưa có tài khoản?
            <NavLink
              to={"/auth/signup"}
              className=" ml-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Đăng ký
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

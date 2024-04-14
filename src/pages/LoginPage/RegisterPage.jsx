import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { authSer } from "../../services/authSer";
import Swal from "sweetalert2";

const RegisterPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "0",
      hoTen: "",
    },
    onSubmit: async (value) => {
      try {
        const promise = await authSer.postRegister(value);
        console.log(promise);
        if (promise.data.statusCode == 200) {
          Swal.fire({
            title: "Đăng ký thành công",
            text: "Bạn sẽ được chuyển về trang đăng nhập",
            icon: "success",
          });
          setTimeout(() => {
            navigate("/auth/login");
          }, 2000);
        }
      } catch (error) {
        Swal.fire({
          title: "Đăng ký thất bại",
          text: error.response.data.content,
          icon: "error",
        });
      }
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống")
        .min(4, "Tài khoản ít phải là 4 chữ cái"),
      matKhau: yup
        .string()
        .required("Mật khẩu không được để trống")
        .min(4, "mật khẩu ít phải là 4 chữ cái"),
      email: yup
        .string()
        .required("email không được để trống")
        .email("Email không hợp lệ"),
      soDt: yup
        .string()
        .required("Số điện thoại không được để trống")
        .matches(/^0\d{9,10}$/, "Số điện thoại không đúng định dạng"),
      hoTen: yup
        .string()
        .required("Tên không được để trống không được để trống"),
    }),
  });
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Đăng ký tài khoản của bạn
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={formLogin.handleSubmit}
          action=""
        >
          <div>
            <label
              htmlFor="taiKhoan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tên tài khoản
            </label>
            <input
              onChange={formLogin.handleChange}
              name="taiKhoan"
              id="taiKhoan"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.taiKhoan}
            </p>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={formLogin.handleChange}
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.email}
            </p>
          </div>
          <div>
            <label
              htmlFor="soDt"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Số đện thoại
            </label>
            <input
              onChange={formLogin.handleChange}
              name="soDt"
              id="soDt"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.soDt}
            </p>
          </div>
          <div>
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Họ và tên
            </label>
            <input
              onChange={formLogin.handleChange}
              name="hoTen"
              id="hoTen"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.hoTen}
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
              name="matKhau"
              id="matKhau"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.matKhau}
            </p>
          </div>

          {/* <div>
            <label
              htmlFor="rematKhau"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nhập lại mật khẩu
            </label>
            <input
              onChange={formLogin.handleChange}
              name="rematKhau"
              id="rematKhau"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className=" mt-1 ml-3 text-red-500 text-xs font-mono h-4">
              {formLogin.errors.reMat}
            </p>
          </div> */}

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đăng ký
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Đã có tài khoản?
            <NavLink
              to={"/auth/signin"}
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Đăng nhập
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

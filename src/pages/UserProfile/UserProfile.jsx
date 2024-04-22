import React from "react";
import { userLocal } from "../../services/userLocal";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/userSlice";

const UserProfile = () => {
  let userData = userLocal.get();
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => {
    return state.userReducer;
  });
  console.log(userData);
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* Code ne`` */}

      <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center p-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtIPM-Tc9D3ftCaDkEAiR3NYZFVBHAa9Kp8AClCQASw&s"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {userData?.hoTen}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Phone : {userData?.soDT}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Email: {userData?.email}
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </a>
            <a
              onClick={() => {
                dispatch(logOutAction());
              }}
              href="#"
              className="py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-red-500 rounded-lg border border-gray-200 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <h3 className="text-2xl font-semibold my-10">Vé của bạn</h3>
        <span className="">
          Bạn chưa đặt vé nào cả!
          <NavLink to={"../"} className="text-blue-600">
            Đặt ngay
          </NavLink>
        </span>
      </div>
      {/* End code nef */}
    </div>
  );
};

export default UserProfile;

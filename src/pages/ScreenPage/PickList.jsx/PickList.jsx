import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authSer } from "../../../services/authSer";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PickList = () => {
  const navigate = useNavigate();

  const DanhSachVe = {
    maLichChieu: "",
    danhSachVe: [],
  };
  const datVe = () => {
    DanhSachVe.maLichChieu = maLichChieu;
    listGheDangDat.forEach((item) => {
      DanhSachVe.danhSachVe.push({
        maGhe: item.maGhe,
        giaVe: item.giaVe,
      });
    });
    if (listGheDangDat.length > 0) {
      Swal.fire({
        title: "Đặt vé thành công",
        text: "Đặt vé thành công vui vòng dến quầy để thanh toán và nhận vé trước giờ chiếu 15 phút!!",
        icon: "success",
        timer: 5000,
        timerProgressBar: true,
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        title: "Đặt ghế thất bại",
        text: "Vui lòng chọn ghế bạn muốn đặt",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  const { maLichChieu } = useParams();
  const { listGheDangDat } = useSelector((state) => state.movieSlice);

  const { userInfor } = useSelector((state) => state.userReducer);
  let danhSachGhe = [];
  let tongGia = 0;
  listGheDangDat.forEach((item) => {
    tongGia += item.giaVe;
    danhSachGhe.push(item.tenGhe + `, `);
  });
  const [movieInfor, setMovieInfor] = useState();
  const fetchMovieInfor = async () => {
    try {
      const data = await authSer.getListGhe(maLichChieu);
      setMovieInfor(data.data.content.thongTinPhim);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMovieInfor();
  }, []);
  return (
    <div className=" bg-slate-200 max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 rounded-2xl items-center">
      <div className="w-64">
        <h3 className="text-xl font-semibold">Thông tin người đặt vé:</h3>
        <p className="text-red-500 font-medium">{userInfor.hoTen}</p>
        <p className="text-red-500 font-medium">{userInfor.email}</p>
        <p className="text-red-500 font-medium">{userInfor.soDT}</p>
      </div>
      <div className="w-64">
        <h3 className="text-xl font-semibold">Thông tin rạp:</h3>
        <p>{movieInfor?.tenCumRap}</p>
        <p>{movieInfor?.tenPhim}</p>
        <p>
          {movieInfor?.tenRap}
          <span className="ml-5">Xuất chiếu: {movieInfor?.gioChieu}</span>
        </p>
      </div>
      <div className="w-[540px]">
        <h3 className="text-xl font-semibold">Thông tin vé</h3>
        <p className=" font-medium">
          Số ghế: <span className="text-purple-500">{danhSachGhe}</span>
        </p>
        <p className="font-medium">
          Giá vé: <span className="text-green-500">{tongGia} đ</span>
        </p>
      </div>
      <div className="w-40">
        <button
          onClick={(params) => {
            datVe();
          }}
          className="bg-blue-500 px-5 py-2 rounded-xl mx-auto text-white font-semibold hover:bg-blue-700 hover:shadow-2xl duration-300"
        >
          Đặt ngay
        </button>
      </div>
    </div>
  );
};

export default PickList;

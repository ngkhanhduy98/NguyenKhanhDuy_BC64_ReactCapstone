import { MA_NHOM, http } from "./urlConfig";

export const authSer = {
  postLogin: (data) => {
    let uri = "/QuanLyNguoiDung/DangNhap";
    return http.post(uri, data);
  },
  postRegister: (data) => {
    let uri = "/QuanLyNguoiDung/DangKy";
    return http.post(uri, data);
  },
  getBanner: () => {
    let uri = "/QuanLyPhim/LayDanhSachBanner";
    return http.get(uri);
  },
  getMovieList: () => {
    let uri = `/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getMovieDetail: (idMovie) => {
    let uri = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getScheduleMovie: (idMovie) => {
    let uri = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getListGhe: (maLichChieu) => {
    let uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return http.get(uri);
  },
};

import ListGhe from "./ListGhe/ListGhe";
import { useParams } from "react-router-dom";
import PickList from "./PickList.jsx/PickList";
import { useEffect, useState } from "react";
import { authSer } from "../../services/authSer";

const ScreenPage = () => {
  const { maLichChieu } = useParams();
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
    <div className="relative">
      <div
        className="bg-cover bg-center min-h-screen "
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundImage: `url(${movieInfor?.hinhAnh})`,
          filter: "blur(8px)",
          zIndex: -1,
        }}
      ></div>
      <div className="md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="my-20 w-full">
          <div className="bg-red-300 h-2 shadow-2xl"></div>
          <h3 className="text-3xl text-center bg-transparent bg-opacity-70 text-slate-300">
            Screen
          </h3>
        </div>
        <ListGhe maLichChieu={maLichChieu} />
        <div className="my-14">
          <PickList maLichCHieu={maLichChieu} />
        </div>
      </div>
    </div>
  );
};

export default ScreenPage;

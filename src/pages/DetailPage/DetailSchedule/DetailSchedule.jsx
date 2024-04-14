import React, { useEffect, useState } from "react";
import { authSer } from "../../../services/authSer";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";

const DetailSchedule = ({ idMovie }) => {
  const [movieSchedule, setMovieSchedule] = useState([]);
  const fetchSchedule = async () => {
    try {
      const data = await authSer.getScheduleMovie(idMovie);
      const dataSchedule = data.data.content.heThongRapChieu;
      console.log("🤪 ~ fetchSchedule ~ dataSchedule:", dataSchedule);
      setMovieSchedule(dataSchedule);
    } catch (error) {}
  };
  const renderHTRapLabel = ({ data }) => {
    console.log(`Da render`);
    return (
      <div className="flex flex-col items-center pb-10 w-40 mx-auto">
        <img
          className="w-12 h-12 mb-3 rounded-full shadow-lg"
          src={data.logo}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
          {data.tenHeThongRap}
        </h5>
      </div>
    );
  };
  const renderLichChieuPhim = (dataLichChieuPhim) => {
    return dataLichChieuPhim.map((dataLcp, i) => {
      return (
        <NavLink
          to={`/screen/${dataLcp.maLichChieu}`}
          key={i}
          className="border p-2 rounded hover:bg-slate-200"
        >
          {dataLcp.ngayChieuGioChieu.substring(0, 10)}
        </NavLink>
      );
    });
  };
  const renderCumRapChieu = (dataCumRapChieu) => {
    console.log("dataCumRapChieu: ", dataCumRapChieu);
    return dataCumRapChieu?.map((dataCumRap, i) => {
      return (
        <div className="mb-3 min-w-full flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row">
          <img
            className="object-cover rounded-t-lg h-auto w-32 md:rounded-none md:rounded-s-lg"
            src={dataCumRap.hinhAnh}
            alt
          />
          <div className="flex flex-col p-4">
            <h5 className=" mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              {dataCumRap.tenCumRap}
            </h5>
            <div className="mb-7 space-x-3">
              {renderLichChieuPhim(dataCumRap.lichChieuPhim)}
            </div>
          </div>
        </div>
      );
    });
  };
  const renderHeThongRap = () => {
    return movieSchedule.map((data, i) => {
      return {
        key: i,
        label: renderHTRapLabel({ data }),
        children: renderCumRapChieu(data.cumRapChieu),
      };
    });
  };
  useEffect(() => {
    fetchSchedule();
  }, []);
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
      />
    </div>
  );
};

export default DetailSchedule;

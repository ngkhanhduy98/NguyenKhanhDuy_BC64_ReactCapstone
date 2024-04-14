import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authSer } from "../../../services/authSer";
import DetailSchedule from "../DetailSchedule/DetailSchedule";
const MovieDetail = () => {
  const { idMovie } = useParams();
  const [movieDetail, setMovieDtail] = useState();
  const fecthMovieDetail = async () => {
    try {
      let data = await authSer.getMovieDetail(idMovie);
      setMovieDtail(data.data.content);
      console.log(data.data.content);
    } catch (error) {}
  };
  useEffect(() => {
    fecthMovieDetail();
  }, []);
  return (
    <div>
      <div
        className="bg-cover bg-center h-[700px] flex items-center justify-center blur-lg"
        style={{
          backgroundImage: `url(${movieDetail?.hinhAnh})`,
        }}
      ></div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:-translate-y-2/3 max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-80 w-full object-cover md:w-48"
                src={movieDetail?.hinhAnh}
                alt="Description"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {movieDetail?.ngayKhoiChieu.substring(0, 10)}
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                {movieDetail?.tenPhim}
              </p>
              <p className="mt-2 line-clamp-2 text-gray-500  sm:line-clamp-5">
                {movieDetail?.moTa}
              </p>
              <button className="bg-blue-600 w-full py-2 mt-5 text-white rounded-sm cursor-pointer hover:bg-blue-700 hover:shadow-xl duration-300">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

import React, { useEffect, useState } from "react";
import { authSer } from "../../../services/authSer";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const [arrMovie, setArrMovie] = useState();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const fetchMovieList = async () => {
    try {
      const data = await authSer.getMovieList();
      let movieArr = data.data.content;
      setArrMovie(movieArr);
    } catch (error) {
      console.log("🤪 ~ fetchMovieList ~ error:", error);
    }
  };
  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };
  useEffect(() => {
    fetchMovieList();
  }, []);
  const renderMovieList = () => {
    return arrMovie?.map((movie) => {
      return (
        <div
          key={movie.maPhim}
          className="hover:shadow-2xl transition-shadow duration-500 max-w-md rounded overflow-hidden shadow-lg relative group"
        >
          {/* Image container with relative positioning for the overlay */}
          <div className="relative w-full h-72">
            <img className="w-full h-full object-cover" src={movie.hinhAnh} />
            {/* Overlay that applies only to the image */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex justify-center items-center">
              {/* Play icon appears in the center on hover */}
              <svg
                className=" cursor-pointer w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.5"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.5"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="min-h-[8rem] px-6 py-4">
            <div className="line-clamp-1 font-bold text-base mb-2">
              {movie.tenPhim}
            </div>
            {/* Conditional rendering based on hover: Description */}
            <p className=" line-clamp-2 text-gray-700 text-base group-hover:hidden">
              {movie.moTa}
            </p>
          </div>
          {/* Conditional rendering based on hover: Booking Now button */}
          <div
            onClick={() => {
              navigatePageDetail(movie.maPhim);
            }}
            className=" cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block whitespace-nowrap"
          >
            Booking Now
          </div>
        </div>
      );
    });
  };
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex space-x-10 mx-auto py-16">
        <button
          onClick={() => setActiveButton(1)}
          className={`hover:text-2xl hover:text-red-500 hover:font-medium transition-all duration-300 ${
            activeButton === 1 ? "text-2xl text-red-500 font-medium" : "text-xl"
          }`}
        >
          Đang chiếu
        </button>
        <button
          onClick={() => setActiveButton(2)}
          className={`hover:text-2xl hover:text-red-500 hover:font-medium transition-all duration-300 ${
            activeButton === 2 ? "text-2xl text-red-500 font-medium" : "text-xl"
          }`}
        >
          Sắp chiếu
        </button>
      </div>

      <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-9">
        {/* card phim */}
        {renderMovieList()}
      </div>
    </div>
  );
};

export default MovieList;

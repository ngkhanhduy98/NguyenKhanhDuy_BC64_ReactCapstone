import React, { useEffect, useRef, useState } from "react";
import { authSer } from "../../../services/authSer";
import { Carousel } from "antd";

const HomeCarousel = () => {
  const [dataBan, setDataBan] = useState([]);
  const CarouselRef = useRef();
  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await authSer.getBanner();
      let dataBannerArr = dataBanner.data.content;
      setDataBan(dataBannerArr);
    } catch (error) {
      console.log("🤪 ~ fetchBannerMovie ~ error:", error);
    }
  };
  useEffect(() => {
    fetchBannerMovie();
  }, []);
  return (
    <div className="relative">
      <Carousel ref={CarouselRef}>
        {dataBan.map((banner) => {
          return (
            <div
              style={{
                height: "500px",
              }}
              key={banner.maBanner}
              className=" w-full"
            >
              <img
                style={{
                  height: "80vh",
                  objectFit: `cover`,
                }}
                className="w-full h-1/2"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      <button
        onClick={() => {
          CarouselRef.current.next();
        }}
        className="bg-none w-1/12 absolute right-0 top-0 hover:bg-slate-300 hover:bg-opacity-10 duration-500	"
        style={{
          height: "80vh",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mx-auto"
          color="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          CarouselRef.current.prev();
        }}
        className="bg-none w-1/12 absolute left-0 top-0 hover:bg-slate-300 hover:bg-opacity-10 duration-500	"
        style={{
          height: "80vh",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mx-auto"
          color="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default HomeCarousel;

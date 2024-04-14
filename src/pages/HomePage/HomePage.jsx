import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import MovieList from "./HomeCarousel/MovieList";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <MovieList />
    </div>
  );
};

export default HomePage;

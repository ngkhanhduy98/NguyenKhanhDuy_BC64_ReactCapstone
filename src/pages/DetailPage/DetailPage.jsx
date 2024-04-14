import React from "react";

import MovieDetail from "./MovieDetail/MovieDetail";
import DetailSchedule from "./DetailSchedule/DetailSchedule";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const { idMovie } = useParams();

  return (
    <div>
      <MovieDetail />
      <DetailSchedule idMovie={idMovie} />
    </div>
  );
};

export default DetailPage;

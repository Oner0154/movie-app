import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { FaArrowCircleLeft } from "react-icons/fa";

const DetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="conteiner-button">
        <button className="return-button" onClick={returnBack}>
          <FaArrowCircleLeft /> &nbsp; Return
        </button>
      </div>
      <MovieDetail movieId={movieId} />
    </>
  );
};

export default DetailPage;

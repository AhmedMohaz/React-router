import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./movies";

const MovieDescription = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="p-4 text-center">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      />
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;

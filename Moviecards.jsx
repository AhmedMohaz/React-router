import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterURL} alt={movie.title} style={styles.image} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} style={styles.link}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: {
    width: "200px",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "5px"
  },
  link: {
    textDecoration: "none",
    color: "blue",
    marginTop: "0.5rem",
    display: "inline-block"
  }
};

export default MovieCard;

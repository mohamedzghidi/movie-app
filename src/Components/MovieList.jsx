import React, { useRef, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          rate={movie.rate}
          posterUrl={movie.posterUrl}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default MovieList;

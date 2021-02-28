import logo from "./logo.svg";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MovieAdd from "./Components/MovieAdd";

function App(props) {
  const [movies, setMovies] = useState([
    {
      title: "Bonnie and Clyde (1967)",
      rate: 7.2,
      posterUrl:
        "https://static01.nyt.com/images/2021/01/04/arts/00netflix-best-of-bonnie-and-clyde/merlin_9796950_839a6fa1-c96c-49c2-b52f-a8505158969c-jumbo.jpg?quality=90&auto=webp",
      description:
        "This here’s Miss Bonnie Parker. I’m Clyde Barrow. We rob banks.” With those simple but accurate words, the producer and star Warren Beatty helped kick off a whole new movement of subversive, challenging, youth-oriented moviemaking",
    },
    {
      title: "Good Fellas (1990)",
      rate: 7.8,
      posterUrl:
        "https://static01.nyt.com/images/2021/01/04/arts/00netflix-best-goodfellas/merlin_166320645_19274b44-23c9-4961-b7bd-da6729c92f2c-jumbo.jpg?quality=90&auto=webp",
      description:
        "Martin Scorsese tells the true story of Henry Hill, an average kid whose idolatry of the neighborhood gangsters made him an errand boy, then a low-level thief, then an architect of the 1978 Lufthansa heist — before he lost it all in a haze of drugs and deception",
    },
    {
      title: "Fruitvale Station (2013)",
      rate: 8.3,
      posterUrl:
        "https://static01.nyt.com/images/2017/07/07/watching/fruitvale-station-watching/fruitvale-station-watching-jumbo-v2.jpg?quality=90&auto=webp",
      description:
        "Too many people only know Oscar Grant III because of the final moments of his life, in which he was shot to death by a Bay Area transit cop on a subway platform in the early hours of New Year’s Day, 2009 — a tragedy captured by the cameras of several passengers",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const [searchResults, setSearchResults] = useState(movies);
  React.useEffect(() => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.rate.toString().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredMovies);
  }, [searchTerm, movies]);

  const updateMovies = (newMoviesList) => {
    setMovies(newMoviesList);
  };

  return (
    <div className="App">
      <Filter searchTerm={searchTerm} handleChange={handleChange} />
      <MovieAdd movies={movies} updateMovies={updateMovies} />
      <MovieList movies={searchResults} />
    </div>
  );
}

export default App;

import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Movies = ({ movies, categoryTitle, setTitle, myFavourites }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const [similar, setSimilar] = useState();
  const cardHandler = (movie) => {
    console.log(movie);
    setTitle({
      search: "/movie/",
      name: `${movie.id}`,
      query: "",
    });
    categoryTitle.current = "";

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=b97e8164329bf3ed7a0f1e99742b4dc4`
    )
      .then((response) => response.json())
      .then((data) => {
        setSimilar(data.results);
      });
  };

  return (
    <div className="cardsContainer">
      <h2 className="categoryTitle">{categoryTitle.current}</h2>

      {movies.results ? (
        <div className="cards">
          {movies.results.map((movie) => (
            <Link
              to={`/movie/${movie.name ? movie.name : movie.title}`}
              className="card Link"
              key={movie.id}
              onClick={() => {
                cardHandler(movie);
              }}
            >
              <img
                className="images"
                src={API_IMG + movie.poster_path}
                alt={movie.original_title}
              />

              <div className="cardRates">
                <span className="movieIcon">
                  <AiTwotoneStar className="starIcon" />{" "}
                  {movie.vote_average.toFixed(1) + "/10"}
                </span>
                <span>{movie.vote_count / 10 + "k votes"}</span>
              </div>
              <div className="card_info">
                <h3 className="card_title">
                  {movie.name ? movie.name : movie.title}
                </h3>
                <p>
                  {movie.release_date
                    ? movie.release_date
                    : movie.first_air_date}
                </p>
                <p>Language: {movie.original_language}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        movies && (
          <MovieDetails
            similar={similar}
            setSimilar={setSimilar}
            setTitle={setTitle}
            movies={movies}
            categoryTitle={categoryTitle}
            myFavourites={myFavourites}
          />
        )
      )}
    </div>
  );
};

export default Movies;

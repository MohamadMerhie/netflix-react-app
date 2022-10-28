import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const MovieDetails = ({
  movies,
  similar,
  setTitle,
  categoryTitle,
  setSimilar,
  myFavourites,
}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const [favourite, setFavourite] = useState([movies]);
  const cardHandler = (movie) => {
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
        console.log(data);
      });
  };
  const addToFavouriteHandler = () => {
    myFavourites.current.length === 0
      ? myFavourites.current.push({ ...movies, id: movies.id })
      : myFavourites.current.map(
          (prev) =>
            prev.id !== movies.id &&
            myFavourites.current.push({ ...movies, id: movies.id })
        );
    // console.log(myFavourites.current)
    //  (myFavourites.current.push(movies))
  };

  return (
    <div className="movieDetails">
      <div className="movieDetailsContainer" key={movies.id}>
        <div className="imageContainer">
          <img
            src={API_IMG + movies.poster_path}
            alt={movies.name ? movies.name : movies.title}
            className="movieDetailsImage"
          />{" "}
        </div>
        <div className="movieDetailsInfo">
          <table>
            <tr>
              <th className="tableHeader" colspan="2">
                {movies.original_title}
              </th>
            </tr>

            <tr>
              <th>Movie Name:</th>
              <th>{movies.name ? movies.name : movies.title}</th>
            </tr>
            <tr>
              <th>Genres:</th>
              <th className="tableGenres">
                {movies.genres
                  ? movies.genres.map((g) => (
                      <span className="tableGenres"> {g.name} </span>
                    ))
                  : movies.genres}
              </th>
            </tr>
            <tr>
              <th>Language: </th>
              <th>{movies.original_language}</th>
            </tr>
            <tr>
              <th>overview:</th>
              <th>{movies.overview}</th>
            </tr>
            <tr>
              <th>Popularity</th>
              <th>{movies.popularity}</th>
            </tr>
            <tr>
              <th>Release Date</th>
              <th>{movies.release_date}</th>
            </tr>
            <tr>
              <th>Duration</th>
              <th>{movies.runtime + " min"}</th>
            </tr>
            <tr>
              <th>Rates</th>
              <th>
                <span className="movieIcon">
                  <AiTwotoneStar className="starIcon" />
                  {Math.floor(movies.vote_average) + "/10"}
                </span>
              </th>
            </tr>

            <tr>
              <th className=" tableHeader" colSpan={2}>
                <button
                  className="addToWatchlist"
                  onClick={(event) => {
                    event.preventDefault();
                    // favourite.push(movies);
                    console.log(!myFavourites.current);
                    if (!myFavourites.current) {
                      setFavourite([movies]);
                      console.log(favourite);
                      myFavourites.current = favourite;
                      console.log(myFavourites.current);
                    } else if (myFavourites.current.length === 1) {
                      if (movies.id !== myFavourites.current[0].id) {
                        setFavourite([...favourite, movies]);
                        myFavourites.current = favourite;
                        console.log(favourite);
                        console.log(myFavourites.current);
                      } else {
                        return favourite;
                      }
                    } else {
                      setFavourite([...favourite, movies]);

                      favourite.forEach((fav) => {
                        if (fav.id !== movies.id) {
                          setFavourite([...favourite, movies]);
                          myFavourites.current = favourite;
                        } else {
                          return favourite;
                        }
                      });
                    }
                  }}
                >
                  Add to watchlist
                </button>
                <button className="addToWatchlist ">Buy Ticket</button>
              </th>
            </tr>
          </table>
        </div>
      </div>

      <h2 className="categoryTitle">Similar Movies</h2>
      {similar && (
        <div className="cards">
          {similar.map((movie) => (
            // start card section
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
                  <AiTwotoneStar className="starIcon" />
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
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

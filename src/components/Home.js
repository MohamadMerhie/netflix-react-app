import Movies from "./Movies";
import Genres from "./Genres";
import Categories from "./Categories";
import { useEffect, useState, useContext } from "react";
import { useRef } from "react";
import { MovieContext } from "../context/MovieContext";
const Home = ({ setTitle, title, categoryTitle }) => {
  const { login, loginUser, setLogin, setLoginUser } = useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  const myFavourites = useRef(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${title.search}${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, [title]);
  useEffect(() => {
    const loginUserLS = localStorage.getItem("loginUser");
    const loginLS = localStorage.getItem("login");
    if (loginLS !== null) {
      setLogin(JSON.parse(loginLS));
    }
    if (loginUserLS !== null && loginUser !== "[]") {
      setLoginUser(JSON.parse(loginUserLS));
    }
  }, []);
  const buttonHandler = (e) => {
    e.preventDefault();
    const languageMovie = movies.results.filter(
      (movie) => movie.original_language === e.target.value
    );
    setMovies({ results: languageMovie });
  };
  return (
    <>
      <div className="kategorie">
        <div className="languages">
          <label htmlFor="">Language</label>
          <select required name="categories" onClick={buttonHandler}>
            <option value="en">En</option>
            <option value="fr">Fr</option>
            <option value="ja">Ja</option>
            <option value="ko">Ko</option>
            <option value="hi">Hi</option>
            <option value="es">Es</option>
          </select>
        </div>
        <Genres setTitle={setTitle} categoryTitle={categoryTitle} />
      </div>
      <Movies
        movies={movies}
        categoryTitle={categoryTitle}
        setTitle={setTitle}
        myFavourites={myFavourites}
      />
      <Categories
        setTitle={setTitle}
        categoryTitle={categoryTitle}
        setMovies={setMovies}
        myFavourites={myFavourites}
      />
    </>
  );
};

export default Home;

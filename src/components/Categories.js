import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { GiFilmSpool } from "react-icons/gi";
import { FaFilm } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";




const Categories = ({ setTitle, categoryTitle,myFavourites,setMovies }) => {
  const categoriesArray = [
    {
      title: "trending",
      name: "TRENDING",
      icon: <BsGraphUp />
    },
    {
      title: "now_playing",
      name: "Now playing",
      icon: <GiFilmSpool />
    },
    {
      title: "popular",
      name: "Popular",
      icon: <FaFilm />

    },
    {
      title: "top_rated",
      name: "Top rated",
      icon: <GiStarsStack />
    },
  ];

  const onCLickHandler = (title, name) => {
    categoryTitle.current = name.toUpperCase();

    title === "trending"
      ? setTitle({
          name: `/${title}/all/day`,
          search: "/",
          query: "",
        })
      : setTitle({
          name: `movie/${title}`,
          search: "/",
          query: "",
        });
  };
  const myFavouritesHandler = () =>{
    if (myFavourites.current) {
     setMovies({results: [...myFavourites.current]})
     categoryTitle.current = "My Favourites"
      
    }
  }

  return (
    <>
    <ul className="categories">
      {categoriesArray.map((category) => (
        <li onClick={() => onCLickHandler(category.title, category.name)}>
          <Link className="Link" to={`/${category.title}`}>
            {category.icon} {category.name.toUpperCase()}
          </Link>
        </li>
      ))}
      <li onClick={myFavouritesHandler}><Link to="/my-favourites" className="Link">My Favourites</Link></li>
    </ul>
      </>
  );
};

export default Categories;

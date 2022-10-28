import genres from './genres.json'
import { Link } from 'react-router-dom';

const Genres = ({setTitle, categoryTitle}) => {
    const onClickHandler = ({id,name}) => {
      categoryTitle.current = name.toUpperCase()
        setTitle({ name: "", search: "/discover/movie", query: `&with_genres=${id}` });
      };
  return (
    
    <ul className="genre_container">

    {genres.map((g) => (
      <li
        key={g.id}
        onClick={(event) => {
          event.preventDefault();
          onClickHandler({id : g.id, name :g.name});
        }}
      >
        <Link className="Link" to={`/genres/${g.name}`}>
        
        {g.name.toUpperCase()}
        </Link>
      </li>
    ))}
  </ul>

 
  );
};

export default Genres;
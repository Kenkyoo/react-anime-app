import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';
import Container from './container';
import Hero from "./hero";
import Loader from './loading';
import { useDebounce } from 'use-debounce';

const server = 'https://server-anime-pq8r.onrender.com/api/anime';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [animeId, setAnimeId] = useState(null);

  const debouncedSearch = useDebounce(searchItem, 500)[0]; // Debounce the search input

  useEffect(() => {
    if (!debouncedSearch) {
      setData([]); // Limpia resultados si no hay búsqueda
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${server}/search`, {
          params: { query: debouncedSearch }, // Envía el valor directamente
        });
        console.log(response.data.data);
        
        setData(response.data.data); // Actualiza los datos con la respuesta del backend
      } catch (error) {
        console.error('Error:', error);
        setData([]); // Limpia los datos en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch]); // Ejecuta el efecto cada vez que cambia `searchItem`

  const handleInputChange = (e) => {
    setSearchItem(e.target.value); // Actualiza el valor de búsqueda
  };

  const handleAnimeSelect = (animeId) => {
    setAnimeId(animeId); // Update state with the clicked card's ID
  };

  return (
    <div>

      {loading && <Loader />}
       {animeId === null && ( 
        <Container>
      <label className="input input-bordered flex items-center gap-2 mx-auto mt-4 input-search">
        <input
          className="grow"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd" />
        </svg>
      </label>

          {data.map((item) => (
            <Card
              key={item.id}
              title={item.attributes.canonicalTitle}
              id={item.id}
              image={item.attributes.posterImage?.large}
              onIdSelect={handleAnimeSelect}
            />
          ))}
        </Container>
      )}



      {animeId !== null && <Hero animeId={animeId} />}

    </div>
  );
};

export default Search;

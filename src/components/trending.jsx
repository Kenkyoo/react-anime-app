import { useEffect, useState } from "react";
import Card from "./card";
import Container from "./container";
import Hero from "./hero";
import Loader from "./loading";

const server = "https://server-anime-pq8r.onrender.com/api/anime";

const Trending = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [animeId, setAnimeId] = useState(null);

  const fetchData = () => {

    setIsLoading(true);

    fetch(`${server}/trending`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data.data)

        setIsLoading(false);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Renderizado en caso de carga
  if (isLoading) {
    return (
      <Loader />
    );
  }

  const handleAnimeSelect = (animeId) => {
    setAnimeId(animeId); // Update state with the clicked card's ID
  };

  return (
    <div>
      {animeId === null && (
      <Container>
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
  )  
}

export default Trending;
import { useEffect, useState } from "react";
import Card from "./card";
import Container from "./container";
import Hero from "./hero";
import Loader from "./loading";

const server = "https://server-anime-pq8r.onrender.com/api/anime";

const Anime = () => {

  const [data, setData] = useState([])
  const [links, setLinks] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [animeId, setAnimeId] = useState(null);

  const fetchData = (url = `${server}/anime`) => {

    setIsLoading(true);

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.links);
                
        setData(data.data)
        setLinks(data.links);

        setIsLoading(false);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const handleAnimeSelect = (animeId) => {
    setAnimeId(animeId); // Update state with the clicked card's ID
  };

  const handleNextPage = () => {
    if (links.next) {
      fetchData(links.next);
    }
  };

  const handlePrevPage = () => {
    if (links.prev) {
      fetchData(links.last);
    };
  }  

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div id="content-wrap">
      {/* Mostrar cards solo si no se ha hecho clic en ninguna */}
      {animeId === null && (
      <>  
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
        <div className="join grid grid-cols-2 mt-4 w-96 mx-auto">
          <button onClick={handlePrevPage} disabled={!links.prev} className="join-item btn btn-outline">Previous page</button>
          <button onClick={handleNextPage} disabled={!links.next} className="join-item btn btn-outline">Next</button>
        </div>           
      </>  
      )}

      {/* Mostrar el Hero solo si se hizo clic en una card */}
      {animeId !== null && <Hero animeId={animeId} />}
    </div>
  );
}

export default Anime;
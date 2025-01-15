import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { motion } from 'framer-motion';

function  Hero({ animeId }) {

      const [loading, setLoading] = useState(false);
      const [data, setData] = useState([]);

      const server = 'https://server-anime-pq8r.onrender.com/api/anime';
      const youtube = 'https://www.youtube.com/watch?v=';

    useEffect(() => {
        if (!animeId) return;
    
        const fetchData = async () => {
            setLoading(true);
            try {
              const response = await axios.get(`${server}/${animeId}`);
              console.log(response.data.data.attributes);  // Ver los datos
              setData(response.data.data.attributes); // Actualiza los datos con la respuesta
            } catch (error) {
              console.error('Error:', error);
              setData(null); // Limpiar datos en caso de error
            } finally {
              setLoading(false);
            }
          };
    
        fetchData();
      }, [animeId]);


      return (
        <div>
          {loading && <div>Loading...</div>}
          {!loading && data && (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${data.coverImage?.original})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="w-full">
                <h1 className="mb-5 text-5xl font-bold">{data.canonicalTitle}</h1>
                <p className="mb-5 w-full text-lg">
                  {data.synopsis}
                </p>
                <button className="btn btn-primary mb-5">
                  <a target='_blank' href={`${youtube}${data.youtubeVideoId}`}>Ver en YT</a>
                </button>
              
              <div  style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                <div className="badge">Users: {data.userCount}</div>
                <div className="badge badge-neutral">Favs: {data.favoritesCount}</div>
                <div className="badge badge-primary">Rating: {data.ratingRank}</div>
                <div className="badge badge-secondary">Episodes: {data.episodeLength}</div>
                <div className="badge badge-accent">{data.subtype}</div>
              </div>
            </div>
            </div>
          </motion.div>
          )}
        </div>
      );
  }
  Hero.propTypes = {
    animeId: PropTypes.string.isRequired,
  };
  
  export default Hero;
import PropTypes from 'prop-types';
import { motion } from "motion/react";
import styled from 'styled-components';

const Container = ({ children }) => {

  const Title = styled.h1`
  	font-size: 4.0rem;
	  line-height: 1.2;
	  letter-spacing: -.1rem;
    font-size: 2.5em;
    text-align: center;
    align-self: center;
	  padding: 2rem;
	  max-width: 960px;
  `;

    return (
      <section className=" flex flex-col gap-10 w-full justify-center">
        <Title>
          AnimeVerse
        </Title>
        <p className="text-center">Tu portal para explorar los animes más populares y encontrar nuevos favoritos</p>
          <motion.section
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
          }}
           className="flex flex-wrap gap-10 w-full justify-center items-center"
          >
            {children}
          </motion.section>
      </section>
    );
}  

  Container.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default Container;
import PropTypes from 'prop-types';
import { motion } from "motion/react"

const Card = ({ title, id, image, onIdSelect }) => {
  
  const handleClick = () => {
    // Aquí usamos el `id` directamente desde las props
    console.log('Card ID clicked:', id);
    onIdSelect(id);  // Llamamos a la función que pasa desde el componente padre
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }}
      onClick={handleClick} key={id} 
      className="relative group w-80 cursor-pointer">
      <span className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <h1 className="-mt-16 text-xl font-bold bg-black opacity-75 w-full py-5 text-center">
          {title}
        </h1>
      </span>
  </motion.div>  
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  onIdSelect: PropTypes.func.isRequired,  // Asegúrate de pasar una función para manejar el click
};

export default Card;

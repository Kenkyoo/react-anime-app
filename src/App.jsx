import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/navbar';
import Anime from "./components/anime";
import Trending from "./components/trending";
import Search from './components/search';
import Footer from './components/footer';


const App = () => {
  return (
    <>
       <NavBar />
       <Routes>
       <Route path="/" element={<Navigate to="/anime" />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
       </Routes>
       <Footer />
    </>
 );
};

export default App;

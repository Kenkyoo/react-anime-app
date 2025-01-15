// component/NavBar.js

import { NavLink } from "react-router-dom";
import Theme from './theme';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100"> 
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>          
        <NavLink 
            to="/"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
              <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </button>
          </NavLink>
        </li>
        <li><NavLink to="/anime">Anime</NavLink></li>
        <li> <NavLink to="/trending">Trending</NavLink></li>
      </ul>
    </div>
    <NavLink to="/anime">
    <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </button>
    </NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/anime">Anime</NavLink></li>
      <li> <NavLink to="/trending">Trending</NavLink></li>
      <li>  <NavLink to="/search"> Search </NavLink>  </li>
    </ul>
  </div>
  
  <div className="navbar-end"> 
    <Theme />
  </div>
</div>
  );
};

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
    return (
      <nav className="mt-3 temp-border default-margin c-bg">
        <ul style={{display: 'flex', gap: '1rem', padding: '15px 0px'}}>
          <li className='bg-white hover:bg-red-50 text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer'><Link to="/">Recipes</Link></li>
          <li className='bg-white hover:bg-blue-50 text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer'><Link to="/Favorite">Favorites</Link></li> 
        </ul>
      </nav>
    );
} 
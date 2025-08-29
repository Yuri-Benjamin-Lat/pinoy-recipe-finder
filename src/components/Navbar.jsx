import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="temp-border default-margin">
        <ul style={{display: 'flex', gap: '2rem', padding: '20px 0px'}}>
          <li><Link to="/">Recipes</Link></li>
          <li><Link to="/Favorite">Favorites</Link></li> 
        </ul>
      </nav>
    );
} 
import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Favoritelist() {
  const { favorites, removeFromFavorites, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="temp-border default-margin">
        <p style={{fontSize: '2rem'}}>No favorites yet!</p>
      </div>
    );
  }

  return (
    <div className="favorite-list default-margin temp-border">
      <h2>Your Favorite Recipes</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} className="favorite-item">
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} style={{ width: '200px', borderRadius: '0.5rem' }} />
          <p>{recipe.description}</p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <button>View Details</button>
            </Link>
            <button onClick={() => removeFromFavorites(recipe.id)}>
              Remove from favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
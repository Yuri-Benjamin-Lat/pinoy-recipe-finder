import React from "react";
import { Link } from "react-router-dom";
import recipes from "../recipes.json";
import { useFavorites } from "../context/FavoritesContext";

export default function Recipelist({ searchTerm }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFavoriteClick = (recipe) => {
    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div className="recipe-list default-margin temp-border" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} style={{ width: '200px', borderRadius: '0.5rem' }} />
          <p>{recipe.description}</p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <button>View Details</button>
            </Link>
            <button onClick={() => handleFavoriteClick(recipe)}>
              {isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
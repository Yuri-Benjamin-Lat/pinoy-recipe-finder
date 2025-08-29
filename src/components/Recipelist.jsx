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
    <div className="mb-3 recipe-list default-margin temp-border c-bg">
      <h2 className='pt-7 text-2xl' style={{ textAlign: 'center' }}>RECIPES</h2>
      <div className='pb-5'
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className=''
          style={{
            border: '1px solid #ddd',
            borderRadius: '0.5rem',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h2 className='pb-4 font-bold' style={{textAlign: 'center'}}>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ width: '200%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem' }} />
            <p className='text-justify pt-4'>{recipe.description}</p>
            
            <div style={{display: 'flex' }} className='pt-5 mt-auto justify-between'>
            <Link to={`/recipe/${recipe.id}`}>
              <button className='text-sm bg-blue-50 hover:bg-white text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer'>View Details</button>
            </Link>
              <button className='text-sm bg-blue-50 hover:bg-white text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer' onClick={() => handleFavoriteClick(recipe)}>
                {isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
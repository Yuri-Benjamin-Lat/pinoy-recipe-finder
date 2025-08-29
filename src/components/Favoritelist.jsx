import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Favoritelist() {
  const { favorites, removeFromFavorites, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="temp-border default-margin c-bg">
      <h2 className='pt-7 text-2xl' style={{ textAlign: 'center' }}>Your Favorite Recipes</h2>
        <p style={{fontSize: '2rem'}} className='text-center pt-10 pb-10'>No favorites yet!</p>
      </div>
    );
  }

  return (
      <div className="mb-3 favorite-list default-margin temp-border c-bg">
        <h2 className='pt-7 text-2xl' style={{ textAlign: 'center' }}>Your Favorite Recipes</h2>
        <div className='pb-5'
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {favorites.map((recipe) => (
            <div key={recipe.id} className="favorite-item"
              style={{
              border: '1px solid #ddd',
              borderRadius: '0.5rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 className='pb-4 font-bold' style={{textAlign: 'center'}}>{recipe.name}</h3>
              <img src={recipe.image} alt={recipe.name} style={{ width: '200%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem' }} />
              <p className='text-justify pt-4'>{recipe.description}</p>
              
              <div style={{display: 'flex'}} className='pt-5 mt-auto justify-between'>
                <Link to={`/recipe/${recipe.id}`}>
                  <button className='text-sm bg-red-50 hover:bg-white text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer'>View Details</button>
                </Link>
                <button className='text-sm bg-red-50 hover:bg-white text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer' onClick={() => removeFromFavorites(recipe.id)}>
                  Remove from favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
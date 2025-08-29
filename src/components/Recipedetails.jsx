import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../recipes.json";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  if (!recipe) return <p>Recipe not found.</p>;

  const handleFavoriteClick = () => {
    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div className='overflow-hidden h-screen'>
      <div className='bg items-center pt-10'>
        <div className="recipe-details default-margin temp-border c-bg website-margin">
          <h1 className='pt-5 pb-5 text-center text-xl'>{recipe.name}</h1>
          <div className='ml-40 mr-40'>
            <img className='items-center mx-auto' src={recipe.image} alt={recipe.name}  style={{ width: 'auto', height: '200px', borderRadius: '0.5rem' }}  />
            <p className='pt-5 pb-5 text-center'>{recipe.description}</p>

            <div className='flex justify-between'>
              <div className='flex items-start mr-20'>
                <ul>
                  <h4 className='font-bold'>Ingredients:</h4>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className='items-start'>
                <h4 className='font-bold'>Instructions:</h4>
                <ol>
                  {recipe.instructions.map((step, index) => (
                    <li className='text-justify' key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className='pt-5 pb-5'>
              <button className='mr-10 text-sm bg-blue-50 hover:bg-white text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer' onClick={handleFavoriteClick}>
                {isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
              </button>

              <Link to="/">
                <button class='text-sm bg-blue-50 hover:bg-white text-gray-1000 rounded-md px-3 py-1 transition-colors duration-200 ease-in-out cursor-pointer'>Back to Recipes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
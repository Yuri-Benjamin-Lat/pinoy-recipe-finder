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
    <div className="recipe-details default-margin temp-border">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{ width: "300px", borderRadius: "0.5rem" }} />
      <p>{recipe.description}</p>

      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4>Instructions:</h4>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <button onClick={handleFavoriteClick}>
        {isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
      </button>

      <Link to="/">
        <button>Back to Recipes</button>
      </Link>
    </div>
  );
}
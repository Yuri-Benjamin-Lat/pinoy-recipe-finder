// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../recipes.json";

export default function RecipeDetails() {
  const { id } = useParams(); // get recipe id from URL
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found.</p>;

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

      <Link to="/">
        <button>Back to Recipes</button>
      </Link>
    </div>
  );
}

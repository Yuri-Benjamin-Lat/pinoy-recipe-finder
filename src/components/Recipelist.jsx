import React from "react";
import { Link } from "react-router-dom";
import recipes from "../recipes.json";

export default function Recipelist({ searchTerm }) {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-list default-margin temp-border" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} style={{ width: '200px', borderRadius: '0.5rem' }} />
          <p>{recipe.description}</p>
          {/* Navigate to details page */}
          <Link to={`/recipe/${recipe.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

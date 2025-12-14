import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition mb-4">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg">{recipe.strMeal}</h2>
          <p className="text-sm text-gray-700">{recipe.strCategory} | {recipe.strArea}</p>
        </div>
      </div>
    </Link>
  );
}

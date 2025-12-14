import React from "react";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return null;

  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{recipe.strMeal}</h1>
      <p className="mb-4">{recipe.strCategory} | {recipe.strArea}</p>
      
      <h2 className="font-semibold mb-1">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="font-semibold mb-1">Instructions:</h2>
      <p className="mb-4">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <div className="mb-4">
          <h2 className="font-semibold mb-1">Video Tutorial:</h2>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {recipe.strSource && (
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Full Recipe
        </a>
      )}
    </div>
  );
}

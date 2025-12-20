import React from "react";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return null;

  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
     ingredients.push(`${ingredient} - ${measure}`);
  } }
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-2">{recipe.strMeal}</h1>
      
      <p className="text-gray-600 mb-6">
        {recipe.strCategory} | {recipe.strArea}</p>

        <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full rounded-lg mb-7"
      />
      
      <h2 className="text-2xl font-semibold mb-3">Ingredients:</h2>
      <ul className="list-disc pl-7 mb-7 space-y-2">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Instructions:</h2>
      <p className="leading-relaxed mb-9 whitespace-pre-line">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-3">Video Tutorial:</h2>
          <iframe
          className="w-full h-80 rounded-lg"
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

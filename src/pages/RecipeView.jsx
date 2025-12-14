import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function RecipeView() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        if (data.meals) setRecipe(data.meals[0]);
        else setError("Recipe not found.");
      } catch {
        setError("Failed to fetch recipe.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {recipe && <RecipeDetails recipe={recipe} />}
    </div>
  );
}

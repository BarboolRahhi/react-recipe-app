import { useState, useEffect } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../shared/Constants";
import { useRecipeContext } from "../context/RecipeContext";

export const useRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getRecipes, isRecipesAvailable, setRecipeByQuery } =
    useRecipeContext();

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    async function getRecipe(query) {
      try {
        const recipeData = await Axios.get(`${BASE_URL}/search`, {
          params: { q: query },
        }).then((res) => res.data);

        setRecipes(recipeData.recipes);
        setLoading(false);
        setRecipeByQuery(query, recipeData.recipes);
      } catch (ex) {
        if (ex.response !== undefined && ex.response.status === 400) {
          toast.error("No Recipes Found. Try Another!");
        }
        setLoading(false);
      }
    }

    if (isRecipesAvailable(query)) {
      setRecipes(getRecipes(query));
      setLoading(false);
    } else {
      getRecipe(query);
    }
  }, [query]);

  return {
    recipes,
    loading,
  };
};

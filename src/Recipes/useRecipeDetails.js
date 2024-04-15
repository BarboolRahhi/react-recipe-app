import { useEffect, useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../shared/Constants";
import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../context/RecipeContext";

export const useRecipeDetails = (recipeId) => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const { getRecipeById, setRecipeIngredients } = useRecipeContext();

  useEffect(() => {
    setLoading(true);
    async function getRecipe() {
      try {
        const recipeData = await Axios.get(`${BASE_URL}/get`, {
          params: { rId: recipeId },
        }).then((res) => res.data);

        setRecipe(recipeData.recipe);
        setRecipeIngredients(recipeId, recipeData.recipe.ingredients);
        setLoading(false);
      } catch (ex) {
        console.log(ex.response.data.error);
        if (ex.response !== undefined && ex.response.status === 404) {
          navigate("/");
          toast.error("No Recipe Found. Try Another!");
        }
        setLoading(false);
      }
    }
    const cacheRecipe = getRecipeById(recipeId);
    if (cacheRecipe !== null && cacheRecipe.ingredients) {
      setRecipe(cacheRecipe);
      setLoading(false);
    } else {
      getRecipe();
    }
  }, [recipeId]);

  return {
    recipe,
    loading,
  };
};

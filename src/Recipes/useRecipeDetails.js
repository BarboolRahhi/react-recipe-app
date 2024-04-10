import { useEffect, useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../shared/Constants";
import { useNavigate } from "react-router-dom";

export const useRecipeDetails = (recipeId) => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getRecipe() {
      try {
        const recipeData = await Axios.get(`${BASE_URL}/get`, {
          params: { rId: recipeId },
        }).then((res) => res.data);

        setRecipe(recipeData.recipe);
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

    getRecipe();
  }, [recipeId]);

  return {
    recipe,
    loading,
  };
};

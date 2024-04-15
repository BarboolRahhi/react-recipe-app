const { createContext, useState, useContext } = require("react");

const RecipeContext = createContext({});

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export function RecipeProvider({ children }) {
  const [recipeMap, setRecipeMap] = useState(new Map());
  const [query, setQuery] = useState("");

  const setRecipeIngredients = (recipeId, ingredients) => {
    if (!recipeMap.has(query)) {
      return;
    }

    const newRecipeMap = new Map(recipeMap);

    const recipes = recipeMap.get(query).map((recipe) => {
      if (recipe.recipe_id === recipeId) {
        recipe["ingredients"] = ingredients;
      }
      return recipe;
    });
    newRecipeMap.set(query, recipes);
    setRecipeMap(newRecipeMap);
  };

  const setRecipeByQuery = (query, recipes) => {
    const newRecipeMap = new Map(recipeMap);
    newRecipeMap.set(query, recipes);
    setRecipeMap(newRecipeMap);
  };

  const getRecipeById = (recipeId) => {
    return recipeMap.has(query)
      ? recipeMap.get(query).find((recipe) => recipe.recipe_id === recipeId)
      : null;
  };

  const getRecipes = (query) => {
    return recipeMap.get(query) ?? [];
  };

  const isRecipesAvailable = (query) => {
    return recipeMap.has(query);
  };

  return (
    <RecipeContext.Provider
      value={{
        getRecipes,
        setRecipeByQuery,
        getRecipeById,
        setRecipeIngredients,
        isRecipesAvailable,
        setQuery,
        query,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

import React from "react";
import { useEffect } from "react";
import RecipeList from "../Recipes/RecipeList";
import SearchForm from "../Search/SearchForm";
import RecipeLoader from "../Recipes/RecipeLoader";
import { useSearchParams } from "react-router-dom";
import { useRecipes } from "../Recipes/useRecipes";
import { searchQueries } from "../shared/RecipeQueryList";
import empty_recipes from "../assets/empty_recipes.svg";
import { useRecipeContext } from "../context/RecipeContext";

const Empty = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img style={{ width: "50%" }} src={empty_recipes} alt="empty_recipes" />
    </div>
  );
};

const Home = () => {
  const [searchParams] = useSearchParams();
  const { setQuery, query } = useRecipeContext();
  const { recipes, loading } = useRecipes(query);

  const handleSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    //set default value to pizza
    setQuery(searchParams.get("search") || "pizza");
  }, []);

  return (
    <div>
      <SearchForm
        searchQueries={searchQueries}
        placeholder={"Search your favourite recipe..."}
        handleSearch={(q) => handleSearch(q)}
      />

      {loading ? <RecipeLoader /> : <RecipeList recipes={recipes} />}
      {!loading && recipes.length === 0 && <Empty />}
    </div>
  );
};

export default Home;

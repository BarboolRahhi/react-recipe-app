import React from "react";
import { useState } from "react";
import RecipeList from "../Recipes/RecipeList";
import SearchForm from "../Search/SearchForm";
import RecipeLoader from "../Recipes/RecipeLoader";
import { useSearchParams } from "react-router-dom";
import { useRecipes } from "../Recipes/useRecipes";
import empty_recipes from "../assets/empty_recipes.svg";

const Empty = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img style={{ width: "50%" }} src={empty_recipes} alt="empty_recipes" />
    </div>
  );
};

const Home = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "pizza");
  const { recipes, loading } = useRecipes(query);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <SearchForm
        defaultValue={query}
        placeholder={"Search your favourite recipe..."}
        handleSearch={(q) => handleSearch(q)}
      />
      {loading ? <RecipeLoader /> : <RecipeList recipes={recipes} />}
      {!loading && recipes.length === 0 && <Empty />}
    </div>
  );
};

export default Home;

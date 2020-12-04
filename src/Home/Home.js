import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';

import RecipeList from '../Recipes/RecipeList';
import SearchForm from '../Search/SearchForm';
import { toast } from 'react-toastify';

const appUrl = 'https://forkify-api.herokuapp.com/api/search';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('pizza');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getRecipe(query) {
      try {
        const recipeData = await Axios.get(appUrl, {
          params: { q: query },
        }).then((res) => res.data);

        setRecipes(recipeData.recipes);
        setLoading(false);
      } catch (ex) {
        if (ex.response !== undefined && ex.response.status === 400)
          toast.error('No Recipes Found. Try Another!');
        setLoading(false);
      }
    }

    getRecipe(query);
  }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <SearchForm handleSearch={(q) => handleSearch(q)} />
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {!loading && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;

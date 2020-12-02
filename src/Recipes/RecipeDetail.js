import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailCard, Image, DetaileCardTitle } from './RecipeElements';
import Axios from 'axios';
import { lightTheme } from '../config/Theme';

import { toast } from 'react-toastify';

const appUrl = 'https://forkify-api.herokuapp.com/api/get';
const RecipeDetail = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getRecipe(id) {
      try {
        const recipeData = await Axios.get(appUrl, {
          params: { rId: id },
        }).then((res) => res.data);

        setRecipe(recipeData.recipe);
        setLoading(false);
      } catch (ex) {
        console.log(ex.response.data.error);
        if (ex.response !== undefined && ex.response.status === 404)
          toast.error('No Recipe Found. Try Another!');
        setLoading(false);
      }
    }

    getRecipe(id);
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading...</p>;
  }

  return (
    <div>
      {recipe && (
        <DetailCard sheight='100%' height='100%'>
          <Image sheight='200px' height='440px' src={recipe.image_url} />
          <div>
            <DetaileCardTitle>{recipe.title}</DetaileCardTitle>
            <small>{recipe.publisher}</small>
            <h3 style={{ color: lightTheme.primary, margin: '16px 0' }}>
              Ingredients:
            </h3>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <p style={{ margin: '10px 0' }}>{ingredient}</p>
                  <hr />
                </div>
              ))}
          </div>
        </DetailCard>
      )}
    </div>
  );
};

export default RecipeDetail;

import React from 'react';
import { Card, CardTitle, Image } from './RecipeElements';
import { useHistory } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/recipe/${recipe.recipe_id}`);
  }

  return (
    <Card sheight='286px' height='246px' onClick={handleClick}>
      <Image sheight='200px' height='160px' src={recipe.image_url} />
      <CardTitle>{recipe.title}</CardTitle>
      <small>{recipe.publisher}</small>
    </Card>
  );
};

export default RecipeItem;

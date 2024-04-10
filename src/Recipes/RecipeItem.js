import React from "react";
import { Card, CardTitle, Image } from "./RecipeElements";
import { useNavigate } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe/${recipe.recipe_id}`);
  }

  return (
    <Card sheight="286px" height="246px" onClick={handleClick}>
      <Image
        sheight="200px"
        height="160px"
        loading="lazy"
        alt={recipe.title}
        src={recipe.image_url}
      />
      <CardTitle>{recipe.title}</CardTitle>
      <small>{recipe.publisher}</small>
    </Card>
  );
};

export default RecipeItem;

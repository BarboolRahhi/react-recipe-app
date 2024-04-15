import React from "react";
import { Card, CardTitle, Chip } from "./RecipeElements";
import { useNavigate } from "react-router-dom";
import ImageLoader from "../shared/components/ImageLoader";

const RecipeItem = ({ recipe }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe/${recipe.recipe_id}`);
  }

  return (
    <Card sheight="286px" height="246px" onClick={handleClick}>
      <ImageLoader alt={recipe.title} src={recipe.image_url} />
      <CardTitle>{recipe.title}</CardTitle>
      <Chip>{recipe.publisher}</Chip>
    </Card>
  );
};

export default RecipeItem;

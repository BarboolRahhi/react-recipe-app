import React from "react";
import RecipeItem from "./RecipeItem";
import { GridContainer } from "./RecipeElements";

const RecipeList = ({ recipes }) => {
  return (
    <GridContainer>
      {recipes.map((recipe, index) => (
        <RecipeItem key={index + recipe.title} recipe={recipe} />
      ))}
    </GridContainer>
  );
};

export default RecipeList;

import React from "react";
import { useParams } from "react-router-dom";
import { DetailCard, Image, DetaileCardTitle } from "./RecipeElements";
import { lightTheme } from "../config/Theme";
import RecipeDetailsLoader from "./RecipeDetailsLoader";
import { useRecipeDetails } from "./useRecipeDetails";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <div key={index}>
            <p style={{ margin: "10px 0" }}>{ingredient}</p>
            <hr />
          </div>
        ))}
    </>
  );
};

const RecipeDetail = () => {
  const { id } = useParams();

  const { recipe, loading } = useRecipeDetails(id);

  if (loading) {
    return <RecipeDetailsLoader />;
  }

  return (
    <div>
      {recipe && (
        <DetailCard sheight="100%" height="100%">
          <Image sheight="200px" height="440px" src={recipe.image_url} />
          <div>
            <DetaileCardTitle>{recipe.title}</DetaileCardTitle>
            <small>{recipe.publisher}</small>
            <h3 style={{ color: lightTheme.primary, margin: "16px 0" }}>
              Ingredients:
            </h3>
            <RecipeIngredients ingredients={recipe.ingredients} />
          </div>
        </DetailCard>
      )}
    </div>
  );
};

export default RecipeDetail;

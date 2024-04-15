import React from "react";
import { useParams } from "react-router-dom";
import { DetailCard, Image, DetaileCardTitle, Chip } from "./RecipeElements";
import { lightTheme } from "../config/Theme";
import RecipeDetailsLoader from "./RecipeDetailsLoader";
import { useRecipeDetails } from "./useRecipeDetails";
import styled from "styled-components";

const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.primary};
  margin: 1em 0;
  padding: 0;
`;

const RecipeIngredients = ({ ingredients }) => {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <div key={index}>
            <p style={{ margin: "10px 0" }}>{ingredient}</p>
            <Divider />
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
            <Chip>{recipe.publisher}</Chip>
            <h3
              style={{
                color: lightTheme.primary,
                margin: "16px 0",
              }}
            >
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

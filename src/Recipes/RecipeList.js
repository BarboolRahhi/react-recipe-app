import React from 'react';
import RecipeItem from './RecipeItem';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
`;

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

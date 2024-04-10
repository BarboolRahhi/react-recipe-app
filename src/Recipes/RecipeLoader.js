import React from "react";
import {
  SkeletonCard,
  SkeletonLoadingItem,
} from "../shared/components/Skeleton";
import { GridContainer } from "./RecipeElements";

const RecipeLoader = () => {
  return (
    <GridContainer>
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonLoadingItem height="160px" />
          <SkeletonLoadingItem />
          <SkeletonLoadingItem />
        </SkeletonCard>
      ))}
    </GridContainer>
  );
};

export default RecipeLoader;

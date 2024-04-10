import React from "react";
import { DetailCard } from "./RecipeElements";
import { SkeletonLoadingItem } from "../shared/components/Skeleton";

const RecipeDetailsLoader = () => {
  return (
    <DetailCard height="100%">
      <SkeletonLoadingItem height="400px" />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <SkeletonLoadingItem height="84px" />
        <SkeletonLoadingItem height="34px" />
        <SkeletonLoadingItem height="34px" />
        <SkeletonLoadingItem height="34px" />
        <SkeletonLoadingItem height="34px" />
        <SkeletonLoadingItem height="34px" />
        <SkeletonLoadingItem height="34px" />
      </div>
    </DetailCard>
  );
};

export default RecipeDetailsLoader;

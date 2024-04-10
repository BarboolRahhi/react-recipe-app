import React, { useState } from "react";
import { SkeletonLoadingItem } from "./Skeleton";
import { Image } from "../../Recipes/RecipeElements";

const ImageLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {!loaded && <SkeletonLoadingItem height="160px" />}
      <Image
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: loaded ? "inline-block" : "none",
        }}
        sheight="200px"
        height="160px"
      />
    </div>
  );
};

export default ImageLoader;

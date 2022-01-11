import React from "react";

const DisplaySingleRecipe = ({ singleRecipeData }) => {
  console.log("==========");
  console.log(singleRecipeData);
  return <div>{singleRecipeData.title}</div>;
};

export default DisplaySingleRecipe;

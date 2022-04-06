import React from "react";
import Headline from "./Headline";
import RandomRecipesTable from "./RandomRecipeTable";

const RandomRecipes = () => {
  return (
    <>
      <Headline viewHeadline={"Your menu for a week"} />
      <RandomRecipesTable />
    </>
  );
};

export default RandomRecipes;

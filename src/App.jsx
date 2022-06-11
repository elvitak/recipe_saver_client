import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import { Routes, Route } from "react-router";
import CreateAndUpdateRecipe from "./components/CreateAndUpdateRecipe";
import RecipeCollectionDisplay from "./components/RecipeCollectionDisplay";
import SingleRecipeDisplay from "./components/SingleRecipeDisplay";
import RandomRecipes from "./components/RandomRecipes";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="add-recipe" element={<CreateAndUpdateRecipe />} />
        <Route path="/" element={<RecipeCollectionDisplay />} />
        <Route path="recipes/:id" element={<SingleRecipeDisplay />} />
        <Route path="recipes/:id/edit" element={<CreateAndUpdateRecipe />} />
        <Route path="recipes/random-generated" element={<RandomRecipes />} />
      </Routes>
    </>
  );
};

export default App;

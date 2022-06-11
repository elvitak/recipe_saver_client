import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import { Routes, Route } from "react-router";
import CreateAndUpdateRecipe from "./components/CreateAndUpdateRecipe";
import DisplayRecipeCollection from "./components/DisplayRecipeCollection";
import DisplaySingleRecipe from "./components/DisplaySingleRecipe";
import RandomRecipes from "./components/RandomRecipes";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="add-recipe" element={<CreateAndUpdateRecipe />} />
        <Route path="/" element={<DisplayRecipeCollection />} />
        <Route path="recipes/:id" element={<DisplaySingleRecipe />} />
        <Route path="recipes/:id/edit" element={<CreateAndUpdateRecipe />} />
        <Route path="recipes/random-generated" element={<RandomRecipes />} />
      </Routes>
    </>
  );
};

export default App;

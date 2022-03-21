import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import { Routes, Route } from "react-router";
import FormToSaveRecipe from "./components/FormToSaveRecipe";
import DisplayRecipeCollection from "./components/DisplayRecipeCollection";
import DisplaySingleRecipe from "./components/DisplaySingleRecipe";
import RandomRecipes from "./components/RandomRecipes";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="add-recipe" element={<FormToSaveRecipe />} />
        <Route path="/" element={<DisplayRecipeCollection />} />
        <Route path="recipes/:id" element={<DisplaySingleRecipe />} />
        <Route path="recipes/:id/edit" element={<FormToSaveRecipe />} />
        <Route path="recipes/random-generated" element={<RandomRecipes />} />
      </Routes>
    </>
  );
};

export default App;

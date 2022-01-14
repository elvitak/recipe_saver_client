import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import { Routes, Route } from "react-router";
import FormToSaveRecipe from "./components/FormToSaveRecipe";
import DisplayRecipeCollection from "./components/DisplayRecipeCollection";
import DisplaySingleRecipe from "./components/DisplaySingleRecipe";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="add-recipe" element={<FormToSaveRecipe />} />
        <Route path="recipes" element={<DisplayRecipeCollection />} />
        <Route path="recipes/:id" element={<DisplaySingleRecipe />} />
      </Routes>
    </>
  );
};

export default App;

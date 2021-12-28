import React from "react";
import { Routes, Route } from "react-router";
import FormToSaveRecipe from "./components/FormToSaveRecipe";
import HeaderComponent from "./components/HeaderComponent";
import DisplayRecipeCollection from "./components/DisplayRecipeCollection";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<DisplayRecipeCollection />} />
        <Route path="/add_recipe" element={<FormToSaveRecipe />} />
      </Routes>
    </>
  );
};

export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router";
import FormToSaveRecipe from "./components/FormToSaveRecipe";
import HeaderComponent from "./components/HeaderComponent";
import DisplayRecipeCollection from "./components/DisplayRecipeCollection";

const App = () => {
  const [recipeCollection, setRecipeCollection] = useState([]);

  return (
    <>
      <HeaderComponent onRecipeCollectionChange={setRecipeCollection} />
      <Routes>
        <Route
          path="/"
          element={
            <DisplayRecipeCollection recipeCollection={recipeCollection} />
          }
        />
        <Route path="/add_recipe" element={<FormToSaveRecipe />} />
      </Routes>
    </>
  );
};

export default App;

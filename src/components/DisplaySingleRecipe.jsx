import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from "../modules/recipes";
import CircularProgress from "@mui/material/CircularProgress";

const DisplaySingleRecipe = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    Recipes.show(id)
      .then((data) => data.recipe)
      .then(setRecipe);
  }, []);

  if (recipe === undefined) {
    return <CircularProgress />;
  } else {
    return <div>{recipe.title}</div>;
  }
};

export default DisplaySingleRecipe;

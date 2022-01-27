import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from "../modules/recipes";
import CircularProgress from "@mui/material/CircularProgress";

const DisplaySingleRecipe = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await Recipes.show(id);
      setRecipe(data.recipe);
    };
    fetchRecipe();
  }, [id]);

  if (recipe === undefined) {
    return <CircularProgress />;
  } else {
    const instructions = recipe.instructions.map((instruction) => (
      <li>{instruction.instruction}</li>
    ));

    const ingredients = recipe.ingredients.map((ingredient) => (
      <li>
        {ingredient.amount} {ingredient.unit} {ingredient.name}
      </li>
    ));

    return (
      <>
        <div data-cy="recipe-title">{recipe.title}</div>
        <div data-cy="recipe-instructions">
          <ol>{instructions}</ol>
        </div>
        <div data-cy="recipe-ingredients">
          <ul>{ingredients}</ul>
        </div>
      </>
    );
  }
};

export default DisplaySingleRecipe;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from "../modules/recipes";
import CircularProgress from "@mui/material/CircularProgress";
import IngredientDisplay from "./IngredientDisplay";
import InstructionDisplay from "./InstructionDisplay";
import Headline from "./Headline";
import SingleRecipeDelete from "./SingleRecipeDelete";
import SingleRecipeEdit from "./SingleRecipeEdit";

const SingleRecipeDisplay = () => {
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
    const instructions = recipe.instructions.map((instruction) => {
      return <InstructionDisplay instruction={instruction} />;
    });

    return (
      <>
        <Headline viewHeadline={recipe.title} />
        <SingleRecipeDelete />
        <SingleRecipeEdit />
        <IngredientDisplay ingredients={recipe.ingredients} />
        <ol>{instructions}</ol>
      </>
    );
  }
};

export default SingleRecipeDisplay;

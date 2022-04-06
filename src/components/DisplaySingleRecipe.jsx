import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Recipes from "../modules/recipes";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import DisplayIngredient from "./DisplayIngredient";
import DisplayInstruction from "./DisplayInstruction";
import Headline from "./Headline";
import SingleRecipeDelete from "./SingleRecipeDelete";

const DisplaySingleRecipe = () => {
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate();
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
      return <DisplayInstruction instruction={instruction} />;
    });

    return (
      <>
        <Headline viewHeadline={recipe.title} />
        <SingleRecipeDelete />
        <Button
          data-cy="edit-recipe-btn"
          color="secondary"
          variant="contained"
          onClick={() => navigate(`/recipes/${id}/edit`)}
        >
          Edit
        </Button>
        <DisplayIngredient ingredients={recipe.ingredients} />
        <ol>{instructions}</ol>
      </>
    );
  }
};

export default DisplaySingleRecipe;

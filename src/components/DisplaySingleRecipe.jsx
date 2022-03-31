import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from "../modules/recipes";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DisplayIngredient from "./DisplayIngredient";
import DisplayInstruction from "./DisplayInstruction";
import Headline from "./Headline";

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

  const handleDelete = async () => {
    const response = await Recipes.delete(id);
    const message = response.data.message;
    navigate("/", { state: { message: message } });
  };

  if (recipe === undefined) {
    return <CircularProgress />;
  } else {
    const instructions = recipe.instructions.map((instruction) => {
      return <DisplayInstruction instruction={instruction} />;
    });

    return (
      <>
        <Button
          onClick={handleDelete}
          data-cy="delete-btn"
          color="secondary"
          variant="contained"
        >
          Delete this recipe
        </Button>
        <Button
          data-cy="edit-recipe-btn"
          color="secondary"
          variant="contained"
          onClick={() => navigate(`/recipes/${id}/edit`)}
        >
          Edit
        </Button>
        <Headline viewHeadline={recipe.title} />
        <DisplayIngredient ingredients={recipe.ingredients} />
        <ol>{instructions}</ol>
      </>
    );
  }
};

export default DisplaySingleRecipe;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from "../modules/recipes";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

    navigate("/recipes", { state: { message: message } });
  };

  if (recipe === undefined) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <Button onClick={handleDelete} data-cy="delete-btn">
          Delete this recipe
        </Button>
        <div data-cy="recipe-title">{recipe.title}</div>
      </>
    );
  }
};

export default DisplaySingleRecipe;

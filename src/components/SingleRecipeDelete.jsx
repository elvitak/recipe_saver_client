import React from "react";
import Recipes from "../modules/recipes";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const SingleRecipeButtons = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    const response = await Recipes.delete(id);
    const message = response.data.message;
    navigate("/", { state: { message: message } });
  };
  return (
    <Button
      onClick={handleDelete}
      data-cy="delete-btn"
      color="secondary"
      variant="contained"
    >
      Delete this recipe
    </Button>
  );
};

export default SingleRecipeButtons;

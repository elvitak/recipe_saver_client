import React from "react";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const SingleRecipeEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Button
      data-cy="edit-recipe-btn"
      color="secondary"
      variant="contained"
      onClick={() => navigate(`/recipes/${id}/edit`)}
    >
      Edit
    </Button>
  );
};

export default SingleRecipeEdit;

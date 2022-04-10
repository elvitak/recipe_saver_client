import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const RandomRecipeDelete = ({ index, onRecipeDelete }) => {
  return (
    <IconButton onClick={() => onRecipeDelete()}>
      <DeleteIcon color="secondary" data-cy={`delete-random-recipe-${index}`} />
    </IconButton>
  );
};

export default RandomRecipeDelete;

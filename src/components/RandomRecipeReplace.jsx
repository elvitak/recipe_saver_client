import React from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { IconButton } from "@mui/material";

const RandomRecipeReplace = ({ onRecipeReplace, index }) => {
  return (
    <IconButton onClick={() => onRecipeReplace()}>
      <ChangeCircleIcon
        color="secondary"
        data-cy={`change-random-recipe-${index}`}
      />
    </IconButton>
  );
};

export default RandomRecipeReplace;

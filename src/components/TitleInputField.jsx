import React from "react";
import { TextField } from "@mui/material";

const TitleInputField = ({ title, onTitleChange }) => {
  return (
    <div>
      <TextField
        data-cy="form-title"
        label="Title"
        variant="standard"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </div>
  );
};

export default TitleInputField;

import React from "react";
import { TextField } from "@material-ui/core";

const TitleInputField = ({ value, onTitleChange }) => {
  return (
    <div>
      <TextField
        data-cy="form-title"
        label="Title"
        variant="standard"
        value={value}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </div>
  );
};

export default TitleInputField;

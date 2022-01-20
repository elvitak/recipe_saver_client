import React from "react";
import { TextField } from "@mui/material";

const InstructionsField = ({ instructions, onInstructionsChange }) => {
  return (
    <div>
      <TextField
        data-cy="form-instructions"
        label="Instructions"
        multiline
        fullWidth
        variant="standard"
        value={instructions.join("\n\n")}
        onChange={(e) => onInstructionsChange(e.target.value.split("\n\n"))}
      />
    </div>
  );
};

export default InstructionsField;

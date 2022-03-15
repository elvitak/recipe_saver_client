import React from "react";
import { TextField } from "@mui/material";

const InstructionsField = ({ instructions, onInstructionsChange }) => {
  const handleOnChange = (e) => {
    const instructions = e.target.value
      .split("\n\n")
      .map((line) => ({ instruction: line }));
    onInstructionsChange(instructions);
  };

  const lines = instructions
    .map((instruction) => instruction.instruction)
    .join("\n\n");

  return (
    <div>
      <TextField
        data-cy="form-instructions"
        label="Instructions"
        multiline
        fullWidth
        variant="standard"
        value={lines}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default InstructionsField;

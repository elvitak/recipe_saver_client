import React from "react";
import { TextField } from "@mui/material";

const InstructionsField = ({ instructions, onInstructionsChange }) => {
  const handleOnChange = (e) => {
    const newInstructions = e.target.value
      .split("\n\n")
      .map((line) => ({ instruction: line }));

    const oldInstructions = instructions
      .filter((instruction) => instruction.id !== undefined)
      .map((instruction) => {
        return { id: instruction.id, _destroy: true };
      });

    onInstructionsChange([...newInstructions, ...oldInstructions]);
  };

  const lines = instructions
    .filter((instruction) => instruction.instruction !== undefined)
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

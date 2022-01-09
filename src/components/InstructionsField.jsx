import React from "react";
import { TextField } from "@material-ui/core";

const InstructionsField = ({ value, onInstructionsChange }) => {
  return (
    <div>
      <TextField
        data-cy="form-instructions"
        label="Instructions"
        multiline
        rows={4}
        variant="standard"
        value={value.join("\n\n")}
        onChange={(e) => onInstructionsChange(e.target.value.split("\n\n"))}
      />
    </div>
  );
};

export default InstructionsField;

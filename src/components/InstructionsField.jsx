import React from "react";

const InstructionsField = ({ value, onInstructionsChange }) => {
  return (
    <textarea
      data-cy="form-instructions"
      label="Instructions"
      placeholder="Take 2 egss and ..."
      value={value.join("\n\n")}
      onChange={(e) => onInstructionsChange(e.target.value.split("\n\n"))}
    />
  );
};

export default InstructionsField;

import React from "react";

const InstructionDisplay = ({ instruction }) => {
  return <li data-cy="recipe-instructions">{instruction.instruction}</li>;
};

export default InstructionDisplay;

import React from "react";

const DisplayInstruction = ({ instruction }) => {
  return <li data-cy="recipe-instructions">{instruction.instruction}</li>;
};

export default DisplayInstruction;

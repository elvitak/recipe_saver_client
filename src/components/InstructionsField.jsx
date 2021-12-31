import React from "react";
import { Form } from "semantic-ui-react";

const InstructionsField = ({ value, onInstructionsChange }) => {
  return (
    <Form.TextArea
      data-cy="form-instructions"
      label="instructions"
      placeholder="Take 2 egss and ..."
      value={value.join("\n\n")}
      onChange={(e) => onInstructionsChange(e.target.value.split("\n\n"))}
    />
  );
};

export default InstructionsField;

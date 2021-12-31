import React from "react";
import { Form } from "semantic-ui-react";

const TitleInputField = ({ value, onTitleChange }) => {
  return (
    <Form.Field>
      <label>Title</label>
      <input
        data-cy="form-title"
        placeholder="Recipe title"
        value={value}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </Form.Field>
  );
};

export default TitleInputField;

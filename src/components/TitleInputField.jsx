import React from "react";

const TitleInputField = ({ value, onTitleChange }) => {
  return (
    <form>
      <label>Title</label>
      <input
        data-cy="form-title"
        placeholder="Recipe title"
        value={value}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </form>
  );
};

export default TitleInputField;

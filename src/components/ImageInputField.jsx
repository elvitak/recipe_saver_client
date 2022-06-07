import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const ImageInputField = ({ onImageChange, fileName }) => {
  const Input = styled("input")({
    display: "none"
  });

  return (
    <div>
      <label htmlFor="contained-button-file">
        <Input
          id="contained-button-file"
          data-cy="attach-image"
          accept="image/*"
          onChange={onImageChange}
          name="image"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Add Image
        </Button>
      </label>
      <Typography
        variant="caption"
        data-cy="filename"
        gutterBottom
        style={{ marginLeft: "10px" }}
      >
        {fileName}
      </Typography>
    </div>
  );
};

export default ImageInputField;

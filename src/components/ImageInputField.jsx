import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import utilities from "../modules/utilities";

const ImageInputField = ({ setImage }) => {
  const [fileName, setFileName] = useState("");
  const Input = styled("input")({
    display: "none"
  });

  const handleImage = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    file.name && setFileName(file.name);
    const encodedFile = await utilities.imageEncoder(file);
    setImage(encodedFile);
  };
  return (
    <div>
      <label htmlFor="contained-button-file">
        <Input
          data-cy="attach-image"
          accept="image/*"
          onChange={handleImage}
          name="image"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Add Image
        </Button>
      </label>
      <Typography variant="caption" gutterBottom style={{ marginLeft: "10px" }}>
        {fileName}
      </Typography>
    </div>
  );
};

export default ImageInputField;

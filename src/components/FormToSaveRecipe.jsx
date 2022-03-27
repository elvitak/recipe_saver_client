import React, { useEffect, useState } from "react";
import IngridientsInputFields from "./IngridientsInputFields";
import InstructionsField from "./InstructionsField";
import TitleInputField from "./TitleInputField";
import Recipes from "../modules/recipes";
import { Container, Button, Typography, Input } from "@mui/material";
import useStyles from "../styles/styles";
import { useParams, useNavigate } from "react-router-dom";
import utilities from "../modules/utilities";
import { styled } from "@mui/material/styles";

const FormToSaveRecipe = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const initialState = {
    title: "",
    instructions: [],
    ingredients: [],
    image: ""
  };

  const Input = styled("input")({
    display: "none"
  });

  const [recipe, setRecipe] = useState(initialState);
  const [message, setMessage] = useState();
  const [fileName, setFileName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        const response = await Recipes.show(id);
        setRecipe(response.recipe);
      }
    };

    fetchRecipe();
  }, [id]);

  const saveRecipe = async () => {
    if (id) {
      const response = await Recipes.update(recipe);
      setMessage(response.data.message);
      setTimeout(() => navigate(`/recipes/${id}`), 2000);
    } else {
      const response = await Recipes.create(recipe);
      setMessage(response.data.message);
    }
  };

  const handleImage = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    file.name && setFileName(file.name);
    const encodedFile = await utilities.imageEncoder(file);
    setRecipe({ ...recipe, image: encodedFile });
  };

  return (
    <>
      <div className={classes.container}>
        <Typography
          data-cy="add-new-recipe"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Save your recipe here
        </Typography>
      </div>
      <div data-cy="flash-message">{message}</div>
      <Container disableGutters>
        <TitleInputField
          title={recipe.title}
          onTitleChange={(value) =>
            setRecipe((previousRecipe) => {
              return { ...previousRecipe, ...{ title: value } };
            })
          }
        />
        <IngridientsInputFields
          ingredients={recipe.ingredients}
          onIngredientsChange={(value) =>
            setRecipe((previousRecipe) => {
              return { ...previousRecipe, ...{ ingredients: value } };
            })
          }
        />
        <InstructionsField
          instructions={recipe.instructions}
          onInstructionsChange={(value) =>
            setRecipe((previousRecipe) => {
              return { ...previousRecipe, ...{ instructions: value } };
            })
          }
        />
        <div>
          <label htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              data-cy="attach-image"
              accept="image/*"
              onChange={handleImage}
              name="image"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Image
            </Button>
          </label>
          <Typography
            variant="caption"
            gutterBottom
            style={{ marginLeft: "10px" }}
          >
            {fileName}
          </Typography>
        </div>
        <Button data-cy="save-btn" variant="contained" onClick={saveRecipe}>
          Save
        </Button>
      </Container>
    </>
  );
};

export default FormToSaveRecipe;

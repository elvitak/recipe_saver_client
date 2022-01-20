import React, { useState } from "react";
import IngridientsInputFields from "./IngridientsInputFields";
import InstructionsField from "./InstructionsField";
import TitleInputField from "./TitleInputField";
import Recipes from "../modules/recipes";
import { Container, Button, Typography } from "@mui/material";
import useStyles from "../styles/styles";

const FormToSaveRecipe = () => {
  const classes = useStyles();
  const initialState = {
    title: "",
    instructions: [],
    ingredients: [{ name: "", amount: 0, unit: "" }],
  };

  const [recipe, setRecipe] = useState(initialState);

  const createRecipe = async () => {
    const response = await Recipes.create(recipe);
    return response;
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
        <Button
          data-cy="form-create-btn"
          variant="contained"
          onClick={createRecipe}
        >
          Add Recipe
        </Button>
      </Container>
    </>
  );
};

export default FormToSaveRecipe;

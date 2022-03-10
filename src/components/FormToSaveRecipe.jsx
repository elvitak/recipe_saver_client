import React, { useEffect, useState } from "react";
import IngridientsInputFields from "./IngridientsInputFields";
import InstructionsField from "./InstructionsField";
import TitleInputField from "./TitleInputField";
import Recipes from "../modules/recipes";
import { Container, Button, Typography } from "@mui/material";
import useStyles from "../styles/styles";
import { useParams } from "react-router-dom";

const FormToSaveRecipe = () => {
  const classes = useStyles();
  const initialState = {
    title: "",
    instructions: [],
    ingredients: [{ name: "", amount: 0, unit: "" }]
  };

  const [recipe, setRecipe] = useState(initialState);
  const [message, setMessage] = useState();
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
    } else {
      const response = await Recipes.create(recipe);
      setMessage(response.data.message);
    }
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
        <Button data-cy="save-btn" variant="contained" onClick={saveRecipe}>
          Save
        </Button>
      </Container>
    </>
  );
};

export default FormToSaveRecipe;

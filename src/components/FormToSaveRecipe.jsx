import React, { useEffect, useState } from "react";
import IngridientsInputFields from "./IngridientsInputFields";
import InstructionsField from "./InstructionsField";
import TitleInputField from "./TitleInputField";
import Recipes from "../modules/recipes";
import { Container, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Headline from "./Headline";
import ImageInputField from "./ImageInputField";

const FormToSaveRecipe = () => {
  const navigate = useNavigate();
  const initialState = {
    title: "",
    instructions: [],
    ingredients: [],
    image: ""
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
      setMessage(response.data.message);
      setTimeout(() => navigate(`/recipes/${id}`), 2000);
    } else {
      const response = await Recipes.create(recipe);
      setRecipe(initialState);
      setMessage(response.data.message);
    }
  };

  return (
    <>
      <Headline viewHeadline={"Save your recipe here"} />
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
        <ImageInputField
          setImage={(value) =>
            setRecipe((previousRecipe) => {
              return { ...previousRecipe, ...{ image: value } };
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

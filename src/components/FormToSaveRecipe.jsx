import React, { useState } from "react";
import { Header, Form, Button } from "semantic-ui-react";
import IngridientsInputFields from "./IngridientsInputFields";
import InstructionsField from "./InstructionsField";
import TitleInputField from "./TitleInputField";

const FormToSaveRecipe = () => {
  const initialState = {
    title: "",
    instructions: [],
    ingredients: [{ name: "", amount: 0, unit: "" }],
  };

  const [recipe, setRecipe] = useState(initialState);

  return (
    <>
      <Header data-cy="addNewRecipe">Save your recipe here</Header>
      <Form>
        <TitleInputField
          value={recipe.title}
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
          value={recipe.instructions}
          onInstructionsChange={(value) =>
            setRecipe((previousRecipe) => {
              return { ...previousRecipe, ...{ instructions: value } };
            })
          }
        />
      </Form>
      <Button data-cy="form-add">Add Recipe</Button>
    </>
  );
};

export default FormToSaveRecipe;

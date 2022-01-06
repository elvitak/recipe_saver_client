import React, { useState } from "react";
import IngridientsInputFields from "./IngridientsInputFields";
import InstructionsField from "./InstructionsField";
import TitleInputField from "./TitleInputField";
import Recipes from "../modules/recipes";

const FormToSaveRecipe = () => {
  const initialState = {
    title: "",
    instructions: [],
    ingredients: [{ name: "", amount: 0, unit: "" }],
  };

  const [recipe, setRecipe] = useState(initialState);

  const createRecipe = async () => {
    const response = await Recipes.create({
      title: recipe.title,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    });

    return response;
  };

  return (
    <>
      <h1 data-cy="addNewRecipe">Save your recipe here</h1>
      <form>
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
      </form>
      <button data-cy="form-create-btn" onClick={createRecipe}>
        Add Recipe
      </button>
    </>
  );
};

export default FormToSaveRecipe;

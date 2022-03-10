import React from "react";
import IngredientInput from "./IngredientInput";

const IngridientsInputFields = ({ ingredients, onIngredientsChange }) => {
  const handleIngredientChange = (index, ingredient) => {
    const changedIngredients = [...ingredients];

    if (index === -1) {
      changedIngredients.push(ingredient);
    } else {
      changedIngredients[index] = ingredient;
    }

    onIngredientsChange(changedIngredients);
  };

  const ingredientsWithEmpty = [
    ...ingredients.map((ingredient, index) => ({
      ingredient: ingredient,
      index: index
    })),
    { ingredient: { name: "", amount: "", unit: "" }, index: -1 }
  ];
  const allIngredientsUI = ingredientsWithEmpty.map(({ ingredient, index }) => {
    return (
      <IngredientInput
        ingredient={ingredient}
        onIngredientChange={(newValue) =>
          handleIngredientChange(index, newValue)
        }
        id={index}
        key={index}
      />
    );
  });

  return <div>{allIngredientsUI}</div>;
};

export default IngridientsInputFields;

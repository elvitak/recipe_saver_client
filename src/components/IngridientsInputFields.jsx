import React from "react";
import IngredientInput from "./IngredientInput";

const IngridientsInputFields = ({ ingredients, onIngredientsChange }) => {
  const handleIngredientChange = (index, ingredient) => {
    const changedIngredients = [...ingredients];
    changedIngredients[index] = ingredient;
    if (changedIngredients[changedIngredients.length - 1].name !== "") {
      changedIngredients.push({ name: "", amount: 0, unit: "" });
    }
    onIngredientsChange(changedIngredients);
  };

  const allIngredientsUI = ingredients.map((ingredient, index) => (
    <IngredientInput
      ingredient={ingredient}
      onIngredientChange={(newValue) => handleIngredientChange(index, newValue)}
      id={index}
      key={index}
    />
  ));
  return <div>{allIngredientsUI}</div>;
};

export default IngridientsInputFields;

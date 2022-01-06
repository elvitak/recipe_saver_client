import React from "react";

const IngredientInput = ({ ingredient, onIngredientChange, id }) => {
  return (
    <form data-cy="form-ingredient-input-line" widths="equal">
      <input
        data-cy={"form-ingredient-amount-" + id}
        label={id === 0 ? "Amount" : undefined}
        placeholder="2"
        width={3}
        value={ingredient.amount.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ amount: e.target.value } })
        }
      />
      <input
        data-cy={"form-ingredient-unit-" + id}
        label={id === 0 ? "Unit" : undefined}
        placeholder="Units"
        width={3}
        value={ingredient.unit.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ unit: e.target.value } })
        }
      />
      <input
        data-cy={"form-ingredient-name-" + id}
        label={id === 0 ? "Ingredient" : undefined}
        placeholder="Ingredient"
        width={10}
        value={ingredient.name.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ name: e.target.value } })
        }
      />
    </form>
  );
};

export default IngredientInput;

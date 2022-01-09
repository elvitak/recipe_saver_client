import React from "react";
import { TextField } from "@material-ui/core";

const IngredientInput = ({ ingredient, onIngredientChange, id }) => {
  return (
    <div data-cy="form-ingredient-input-line" widths="equal">
      <TextField
        data-cy={"form-ingredient-amount-" + id}
        label={id === 0 ? "Amount" : undefined}
        variant="standard"
        value={ingredient.amount.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ amount: e.target.value } })
        }
      />

      <TextField
        data-cy={"form-ingredient-unit-" + id}
        label={id === 0 ? "Unit" : undefined}
        variant="standard"
        value={ingredient.unit.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ unit: e.target.value } })
        }
      />

      <TextField
        data-cy={"form-ingredient-name-" + id}
        label={id === 0 ? "Ingredient" : undefined}
        variant="standard"
        value={ingredient.name.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ name: e.target.value } })
        }
      />
    </div>
  );
};

export default IngredientInput;

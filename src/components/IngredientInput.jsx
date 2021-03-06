import React from "react";
import { TextField, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const IngredientInput = ({ ingredient, onIngredientChange, id }) => {
  const onIngredientDelete = () => {
    onIngredientChange({ ...ingredient, _destroy: true });
  };

  if (ingredient._destroy) {
    return <></>;
  } else {
    return (
      <div data-cy="form-ingredient-input-line" widths="equal">
        <TextField
          data-cy={"form-ingredient-amount-" + id}
          label={id === 0 ? "Amount" : undefined}
          variant="standard"
          value={ingredient.amount}
          onChange={(e) =>
            onIngredientChange({ ...ingredient, ...{ amount: e.target.value } })
          }
        />
        <TextField
          data-cy={"form-ingredient-unit-" + id}
          label={id === 0 ? "Unit" : undefined}
          variant="standard"
          value={ingredient.unit}
          onChange={(e) =>
            onIngredientChange({ ...ingredient, ...{ unit: e.target.value } })
          }
        />
        <TextField
          data-cy={"form-ingredient-name-" + id}
          label={id === 0 ? "Ingredient" : undefined}
          variant="standard"
          value={ingredient.name}
          onChange={(e) =>
            onIngredientChange({ ...ingredient, ...{ name: e.target.value } })
          }
        />
        <IconButton onClick={() => onIngredientDelete()}>
          <ClearIcon color="secondary" data-cy={`ingredient-delete-${id}`} />
        </IconButton>
      </div>
    );
  }
};

export default IngredientInput;

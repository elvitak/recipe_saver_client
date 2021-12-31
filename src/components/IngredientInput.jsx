import React from "react";
import { Form } from "semantic-ui-react";

const IngredientInput = ({ ingredient, onIngredientChange, id }) => {
  return (
    <Form.Group data-cy="form-ingredient-input-line" widths="equal">
      <Form.Input
        data-cy={"form-ingredient-amount-" + id}
        label={id === 0 ? "Amount" : undefined}
        placeholder="2"
        width={3}
        value={ingredient.amount.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ amount: e.target.value } })
        }
      />
      <Form.Input
        data-cy={"form-ingredient-unit-" + id}
        label={id === 0 ? "Unit" : undefined}
        placeholder="Units"
        width={3}
        value={ingredient.unit.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ unit: e.target.value } })
        }
      />
      <Form.Input
        data-cy={"form-ingredient-name-" + id}
        label={id === 0 ? "Ingredient" : undefined}
        placeholder="Ingredient"
        width={10}
        value={ingredient.name.value}
        onChange={(e) =>
          onIngredientChange({ ...ingredient, ...{ name: e.target.value } })
        }
      />
    </Form.Group>
  );
};

export default IngredientInput;

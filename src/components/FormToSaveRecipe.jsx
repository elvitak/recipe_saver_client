import React, { useReducer } from "react";
import { Header, Form, Button } from "semantic-ui-react";

const FormToSaveRecipe = () => {
  const initialState = {
    title: "",
    instructions: "",
    ingredients: [{ name: "", amount: 0, unit: "" }],
  };

  function reducer(state, action) {
    if (action.what === "state") {
      return { ...state, ...action.partial };
    } else if (action.what === "ingredient") {
      const newIngredients = [...state.ingredients];
      newIngredients[action.index] = {
        ...newIngredients[action.index],
        ...action.partial,
      };
      if (newIngredients[newIngredients.length - 1].name !== "") {
        newIngredients.push({ name: "", amount: 0, unit: "" });
      }
      return { ...state, ingredients: newIngredients };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const allIngredientsUI = state.ingredients.map((ingredient, index) => (
    <Form.Group data-cy="form-ingredient-input-line" widths="equal" key={index}>
      <Form.Input
        data-cy={"form-ingredient-amount-" + index}
        label="Amount"
        placeholder="2"
        value={ingredient.amount.value}
        onChange={(e) =>
          dispatch({
            what: "ingredient",
            index: index,
            partial: { amount: e.target.value },
          })
        }
      />
      <Form.Input
        data-cy={"form-ingredient-unit-" + index}
        label="Units"
        placeholder="Units"
        value={ingredient.unit.value}
        onChange={(e) =>
          dispatch({
            what: "ingredient",
            index: index,
            partial: { unit: e.target.value },
          })
        }
      />
      <Form.Input
        data-cy={"form-ingredient-name-" + index}
        label="Ingredient"
        placeholder="Ingredient"
        value={ingredient.name.value}
        onChange={(e) =>
          dispatch({
            what: "ingredient",
            index: index,
            partial: { name: e.target.value },
          })
        }
      />
    </Form.Group>
  ));

  return (
    <>
      <Header data-cy="addNewRecipe">Save your recipe here</Header>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input
            data-cy="form-title"
            placeholder="Recipe title"
            value={state.title}
            onChange={(e) =>
              dispatch({ what: "state", partial: { title: e.target.value } })
            }
          />
        </Form.Field>
        {allIngredientsUI}
        <Form.TextArea
          data-cy="form-instructions"
          label="instructions"
          placeholder="Take 2 egss and ..."
          value={state.instructions}
          onChange={(e) =>
            dispatch({
              what: "state",
              partial: { instructions: e.target.value },
            })
          }
        />
      </Form>
      <Button data-cy="form-add">Add Recipe</Button>
    </>
  );
};

export default FormToSaveRecipe;

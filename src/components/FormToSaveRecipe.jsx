import React from "react";
import { Header, Form, Button } from "semantic-ui-react";

const FormToSaveRecipe = () => {
  return (
    <>
      <Header data-cy="addNewRecipe">Save your recipe here</Header>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input data-cy="form-title" placeholder="Recipe title" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Input
            data-cy="form-ingredient-amount"
            label="Amount"
            placeholder="2"
          />
          <Form.Input
            data-cy="form-ingredient-unit"
            label="Units"
            placeholder="Units"
          />
          <Form.Input
            data-cy="form-ingredient-name"
            label="Ingredient"
            placeholder="Ingredient"
          />
        </Form.Group>
        <Form.TextArea
          data-cy="form-instructions"
          label="instructions"
          placeholder="Take 2 egss and ..."
        />
      </Form>
      <Button data-cy="form-add">Add Recipe</Button>
    </>
  );
};

export default FormToSaveRecipe;

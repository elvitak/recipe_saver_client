import axios from "axios";

const Recipes = {
  baseURL: "http://localhost:4000/api",

  async create(recipe) {
    const ingredientsWithoutEmptyRow = recipe.ingredients.slice(0, -1);

    const recipeRequest = {
      title: recipe.title,
      ingredients_attributes: ingredientsWithoutEmptyRow,
      instructions_attributes: recipe.instructions,
    };
    const { response } = await axios.post(`${this.baseURL}/recipes`, {
      recipe: recipeRequest,
    });
    return response;
  },
};

export default Recipes;

import axios from "axios";

let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:4000/api";
} else {
  apiURL = "https://elvitas-recipe-saver.herokuapp.com/api";
}

const Recipes = {
  async create(recipe) {
    const ingredientsWithoutEmptyRow = recipe.ingredients.slice(0, -1);

    const recipeRequest = {
      title: recipe.title,
      ingredients_attributes: ingredientsWithoutEmptyRow,
      instructions_attributes: recipe.instructions,
    };
    const response = await axios.post(`${apiURL}/recipes`, {
      recipe: recipeRequest,
    });
    return response;
  },

  async index() {
    const { data } = await axios.get(`${apiURL}/recipes`);
    return data;
  },

  async show(id) {
    const { data } = await axios.get(`${apiURL}/recipes/${id}`);
    return data;
  },

  async delete(id) {
    const response = await axios.delete(`${apiURL}/recipes/${id}`);
    return response;
  },
};

export default Recipes;

import axios from "axios";

let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:4000/api";
} else {
  apiURL = "https://elvitas-recipe-saver.herokuapp.com/api";
}

const Recipes = {
  async create(recipe) {
    const recipeRequest = {
      title: recipe.title,
      ingredients_attributes: recipe.ingredients,
      instructions_attributes: recipe.instructions
    };
    const response = await axios.post(`${apiURL}/recipes`, {
      recipe: recipeRequest
    });
    return response;
  },

  async index(randomSampleSize) {
    if (randomSampleSize) {
      const { data } = await axios.get(`${apiURL}/recipes`, {
        random_sample_size: randomSampleSize
      });
      return data;
    } else {
      const { data } = await axios.get(`${apiURL}/recipes`);
      return data;
    }
  },

  async show(id) {
    const { data } = await axios.get(`${apiURL}/recipes/${id}`);
    return data;
  },

  async delete(id) {
    const response = await axios.delete(`${apiURL}/recipes/${id}`);
    return response;
  },

  async update(recipe) {
    const response = await axios.put(`${apiURL}/recipes/${recipe.id}`, {
      recipe: {
        title: recipe.title,
        ingredients_attributes: recipe.ingredients,
        instructions_attributes: recipe.instructions
      }
    });
    return response;
  }
};

export default Recipes;

import axios from "axios";

const Recipes = {
  baseURL: "http://localhost:3000/api",

  async create({ title, ingredients, instructions }) {
    debugger;
    const { response } = await axios.post(`${this.baseURL}/recipes`, {
      params: {
        title: title,
        ingredients: ingredients,
        instructions: instructions,
      },
    });
    return response;
  },
};

export default Recipes;

import React, { useState, useEffect } from "react";
import { Table, TableCell, TableRow, TableBody } from "@mui/material";
import Recipes from "../modules/recipes";
import weekdays from "../modules/weekdays";
import RandomRecipeDelete from "./RandomRecipeDelete";
import RandomRecipeReplace from "./RandomRecipeReplace";

const RandomRecipeTable = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await Recipes.index(weekdays.length);
      setRecipes(data.recipes);
    };
    fetchRecipes();
  }, []);

  const replaceRecipe = async (index) => {
    const data = await Recipes.index(1);
    recipes[index] = data.recipes[0];
    setRecipes([...recipes]);
  };

  const deleteRecipe = async (index) => {
    recipes[index] = "";
    setRecipes([...recipes]);
  };

  return (
    <Table>
      <TableBody>
        {recipes.map((recipe, index) => (
          <TableRow data-cy="random-recipes" key={recipe.id}>
            <TableCell>{weekdays[index]}</TableCell>
            <TableCell data-cy={`random-recipes-${index}`}>
              {recipe.title}
            </TableCell>
            <RandomRecipeReplace
              onRecipeReplace={() => replaceRecipe(index)}
              index={index}
            />
            <RandomRecipeDelete
              onRecipeDelete={() => deleteRecipe(index)}
              index={index}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RandomRecipeTable;

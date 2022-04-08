import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  IconButton
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Recipes from "../modules/recipes";
import weekdays from "../modules/weekdays";

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
            <IconButton onClick={() => replaceRecipe(index)}>
              <ChangeCircleIcon
                color="secondary"
                data-cy={`change-random-recipe-${index}`}
              />
            </IconButton>
            <IconButton onClick={() => deleteRecipe(index)}>
              <DeleteIcon
                color="secondary"
                data-cy={`delete-random-recipe-${index}`}
              />
            </IconButton>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RandomRecipeTable;

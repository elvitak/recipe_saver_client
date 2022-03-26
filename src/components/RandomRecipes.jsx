import React, { useEffect, useState } from "react";
import Recipes from "../modules/recipes";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  IconButton
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const RandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const fetchRecipes = async () => {
    const randomSampleSize = 7;
    const data = await Recipes.index(randomSampleSize);
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const replaceRecipe = async (index) => {
    const randomSampleSize = 1;
    const data = await Recipes.index(randomSampleSize);
    recipes[index] = data.recipes[0];
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RandomRecipes;

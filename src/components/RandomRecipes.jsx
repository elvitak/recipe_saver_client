import React, { useEffect, useState } from "react";
import Recipes from "../modules/recipes";
import { Table, TableCell, TableRow, TableBody } from "@mui/material";

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
    let random_sample_size = 7;
    const data = await Recipes.index(random_sample_size);
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Table>
      <TableBody>
        {recipes.map((recipe, index) => (
          <TableRow data-cy="random-recipes" key={recipe.id}>
            <TableCell>{weekdays[index]}</TableCell>
            <TableCell data-cy={`random-recipes-${index}`}>
              {recipe.title}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RandomRecipes;

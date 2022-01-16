import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import Recipes from "../modules/recipes";
import useStyles from "../styles/styles";
import RecipeCard from "./RecipeCard";

const DisplayRecipeCollection = () => {
  const [recipes, setRecipes] = useState([]);
  const classes = useStyles();

  const fetchRecipes = async () => {
    const data = await Recipes.index();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const recipeCollection = recipes.map((recipe) => {
    return (
      <Grid item key={recipe.id} xs={12} sm={6} md={4}>
        <RecipeCard recipe={recipe} />
      </Grid>
    );
  });

  return (
    <>
      <main>
        <div className={classes.container}>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            data-cy="collection-header"
          >
            Saved recipes
          </Typography>
        </div>
        <Container className={classes.cardGrid} disableGutters={true}>
          <Grid data-cy="recipe-collection" container spacing={4}>
            {recipeCollection}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default DisplayRecipeCollection;

import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import Recipes from "../modules/recipes";
import useStyles from "../styles/styles";
import RecipeCard from "./RecipeCard";
import { useLocation } from "react-router-dom";

const DisplayRecipeCollection = () => {
  const [recipes, setRecipes] = useState([]);
  const classes = useStyles();
  const { state } = useLocation();
  const [message, setMessage] = useState();

  const fetchRecipes = async () => {
    try {
      const data = await Recipes.index();
      setRecipes(data.recipes);
    } catch (e) {
      if (e.response.status === 404 && e.response.data.message) {
        setMessage(e.response.data.message);
      } else {
        throw e;
      }
    }
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
        <div data-cy="flash-message">{state?.message}</div>
        {message ? (
          <div data-cy="informational-message">{message}</div>
        ) : (
          <Container className={classes.cardGrid} disableGutters={true}>
            <Grid data-cy="recipe-collection" container spacing={4}>
              {recipeCollection}
            </Grid>
          </Container>
        )}
      </main>
    </>
  );
};

export default DisplayRecipeCollection;

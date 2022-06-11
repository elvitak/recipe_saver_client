import React, { useState, useEffect } from "react";
import { Container, Grid, CircularProgress } from "@mui/material";
import Recipes from "../modules/recipes";
import useStyles from "../styles/styles";
import RecipeCard from "./RecipeCard";
import { useLocation } from "react-router-dom";
import Headline from "./Headline";

const RecipeCollectionDisplay = () => {
  const [recipes, setRecipes] = useState();
  const classes = useStyles();
  const { state } = useLocation();
  const [stateMessage, setStateMessage] = useState(state?.message);

  const fetchRecipes = async () => {
    const data = await Recipes.index();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    setTimeout(() => setStateMessage(undefined), 3000);
  }, [state]);

  let content;
  if (recipes === undefined) {
    content = <CircularProgress data-cy="loading-circle" />;
  } else if (recipes.length === 0) {
    content = (
      <div data-cy="informational-message">
        You haven't saved any recipe yet
      </div>
    );
  } else {
    const recipeCollection = recipes.map((recipe) => {
      return (
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
          <RecipeCard recipe={recipe} />
        </Grid>
      );
    });

    content = (
      <Container className={classes.cardGrid} disableGutters={true}>
        <Grid data-cy="recipe-collection" container spacing={4}>
          {recipeCollection}
        </Grid>
      </Container>
    );
  }

  const flashMessage = stateMessage ? (
    <div data-cy="flash-message">{stateMessage}</div>
  ) : undefined;

  return (
    <>
      <Headline viewHeadline={"Saved recipes"} />
      {flashMessage}
      {content}
    </>
  );
};

export default RecipeCollectionDisplay;

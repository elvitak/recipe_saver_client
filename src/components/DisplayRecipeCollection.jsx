import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Recipes from "../modules/recipes";
import useStyles from "../styles/styles";
import RecipeCard from "./RecipeCard";
import { useLocation } from "react-router-dom";
import Headline from "./Headline";

const DisplayRecipeCollection = () => {
  const [recipes, setRecipes] = useState([]);
  const classes = useStyles();
  const { state } = useLocation();
  const [message, setMessage] = useState();
  const [stateMessage, setStateMessage] = useState(state?.message);

  const fetchRecipes = async () => {
    const data = await Recipes.index();
    if (data.recipes.length === 0) {
      setMessage("You haven't saved any recipe yet");
    } else {
      setRecipes(data.recipes);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    setTimeout(() => setStateMessage(""), 3000);
  }, [state]);

  const recipeCollection = recipes.map((recipe) => {
    return (
      <Grid item key={recipe.id} xs={12} sm={6} md={4}>
        <RecipeCard recipe={recipe} />
      </Grid>
    );
  });

  return (
    <>
      <Headline viewHeadline={"Saved recipes"} />
      <div data-cy="flash-message">{stateMessage}</div>
      {message ? (
        <div data-cy="informational-message">{message}</div>
      ) : (
        <Container className={classes.cardGrid} disableGutters={true}>
          <Grid data-cy="recipe-collection" container spacing={4}>
            {recipeCollection}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default DisplayRecipeCollection;

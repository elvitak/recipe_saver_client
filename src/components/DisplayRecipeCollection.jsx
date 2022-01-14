import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  CardContent,
  CardActions,
  Button,
  Grid,
  Card,
} from "@mui/material";
import useStyles from "../styles/styles";
import Recipes from "../modules/recipes";
import { Link } from "react-router-dom";

const DisplayRecipeCollection = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const data = await Recipes.index();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const classes = useStyles();
  return (
    <>
      <main>
        <div className={classes.container}>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            data-cy="collectionOfRecipes"
          >
            Saved recipes
          </Typography>
        </div>
        <Container className={classes.cardGrid} disableGutters={true}>
          <Grid data-cy="recipe-collection" container spacing={4}>
            {recipes.map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      data-cy="recipe-title"
                    >
                      {recipe.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      to={"/recipes/" + recipe.id}
                      data-cy="view-btn"
                      size="small"
                      color="primary"
                      component={Link}
                    >
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default DisplayRecipeCollection;

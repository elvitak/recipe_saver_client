import React, { useState } from "react";
import {
  Typography,
  Container,
  CardContent,
  CardActions,
  Button,
  Grid,
  Card,
} from "@material-ui/core";
import useStyles from "../styles/styles";
import Recipes from "../modules/recipes";
import DisplaySingleRecipe from "./DisplaySingleRecipe";

const DisplayRecipeCollection = ({ recipeCollection }) => {
  const [showSingleRecipe, setShowSingleRecipe] = useState(false);

  const showRecipe = async (id) => {
    const data = await Recipes.show(id);
  };

  const displaySingleRecipe = () => setShowSingleRecipe(true);

  const classes = useStyles();
  return (
    <>
      {showSingleRecipe ? (
        <DisplaySingleRecipe />
      ) : (
        <main>
          <div className={classes.container}>
            <Typography
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
              data-cy="collectionOfRecipes"
            >
              Saved recipes
            </Typography>
          </div>
          <Container className={classes.cardGrid} disableGutters={true}>
            <Grid container spacing={4}>
              {recipeCollection.map((recipe) => (
                <Grid
                  item
                  key={recipe.id}
                  xs={12}
                  sm={6}
                  md={4}
                  data-cy="recipe-collection"
                >
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        data-cy="recipe-collection-title"
                      >
                        {recipe.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        data-cy="view-btn"
                        onClick={displaySingleRecipe}
                        onClick={() => showRecipe(recipe.id)}
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
      )}
    </>
  );
};

export default DisplayRecipeCollection;

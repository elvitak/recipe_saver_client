import React, { useState, useEffect } from "react";
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
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
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
                    <Link to={"/recipes/" + recipe.id} data-cy="view-btn">
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </Link>
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

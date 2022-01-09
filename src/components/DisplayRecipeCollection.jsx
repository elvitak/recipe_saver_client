import React from "react";
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

const DisplayRecipeCollection = ({ recipeCollection }) => {
  const classes = useStyles();
  return (
    <>
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
              <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {recipe.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
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

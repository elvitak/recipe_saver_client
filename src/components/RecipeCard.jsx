import React from "react";
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  Card
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "../styles/styles";

const RecipeCard = ({ recipe }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" data-cy="recipe-title">
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
      </CardActions>
    </Card>
  );
};

export default RecipeCard;

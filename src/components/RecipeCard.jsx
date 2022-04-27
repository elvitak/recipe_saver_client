import React from "react";
import { Card, CardHeader, CardMedia, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea
        data-cy="recipe-card"
        onClick={() => navigate(`/recipes/${recipe.id}`)}
      >
        <CardHeader data-cy="recipe-title" title={recipe.title} />
        <CardMedia
          data-cy="recipe-image"
          component="img"
          height="194"
          image={recipe.image}
        />
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;

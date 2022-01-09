import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import Recipes from "../modules/recipes";
import useStyles from "../styles/styles";

const HeaderComponent = ({ onRecipeCollectionChange }) => {
  const classes = useStyles();

  const getRecipes = async () => {
    const data = await Recipes.index();
    onRecipeCollectionChange(data.recipes);
  };

  return (
    <AppBar position="static" style={{ background: "#616161" }}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link
            to="/"
            className={classes.link}
            id="recipeCollectionTab"
            onClick={getRecipes}
          >
            Saved recipes
          </Link>
          <Link to="/add_recipe" className={classes.link} id="addNewRecipeTab">
            Add new recipe
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;

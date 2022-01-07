import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import Recipes from "../modules/recipes";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    position: "left",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "black",
    },
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();

  const getRecipes = async () => {
    const response = await Recipes.index();
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

import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import useStyles from "../styles/styles";

const HeaderComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: "#616161" }}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to="/recipes" className={classes.link} id="recipeCollectionTab">
            Saved recipes
          </Link>
          <Link to="/add-recipe" className={classes.link} id="addNewRecipeTab">
            Add new recipe
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;

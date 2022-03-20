import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, CssBaseline } from "@mui/material";
import useStyles from "../styles/styles";

const HeaderComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: "#7a1e77" }}>
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.link} id="recipeCollectionTab">
          Saved recipes
        </Link>
        <Link to="/add-recipe" className={classes.link} id="addNewRecipeTab">
          Add new recipe
        </Link>
        <Link
          to="/recipes/random-generated"
          className={classes.link}
          id="generateTab"
        >
          Generate weekly menu
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;

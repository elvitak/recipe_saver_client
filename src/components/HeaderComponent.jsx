import React from "react";
import { NavLink, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <nav>
      <li
        id="recipeCollectionTab"
        name="Your saved recipes"
        as={Link}
        to={{ pathname: "/" }}
      />
      <li
        id="addNewRecipeTab"
        name="Add new recipe"
        as={NavLink}
        to={{ pathname: "/add_recipe" }}
      />
    </nav>
  );
};

export default HeaderComponent;

import React from "react";
import { Segment, Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Segment inverted>
      <Menu>
        <Menu.Item
          id="recipeCollectionTab"
          name="Your saved recipes"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          id="addNewRecipeTab"
          name="Add new recipe"
          as={NavLink}
          to={{ pathname: "/add_recipe" }}
        />
      </Menu>
    </Segment>
  );
};

export default HeaderComponent;

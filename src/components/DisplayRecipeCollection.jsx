import React from "react";

const DisplayRecipeCollection = ({ recipeCollection }) => {
  const recipeList = recipeCollection.map((recipe) => {
    return <li key={recipe.id}>{recipe.title}</li>;
  });

  return (
    <>
      <h1 data-cy="collectionOfRecipes">Saved recipes</h1>
      <ul data-cy="recipe-collection">{recipeList}</ul>
    </>
  );
};

export default DisplayRecipeCollection;

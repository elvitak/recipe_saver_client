import React from "react";
import FormToSaveRecipe from "./components/FormToSaveRecipe";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <FormToSaveRecipe />
    </React.Fragment>
  );
};

export default App;

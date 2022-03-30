import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../styles/styles";

const Headline = ({ viewHeadline }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
        data-cy="view-header"
      >
        {viewHeadline}
      </Typography>
    </div>
  );
};

export default Headline;

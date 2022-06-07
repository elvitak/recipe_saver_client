import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const DisplayIngredient = ({ ingredients }) => {
  return (
    <TableContainer component={Paper} style={{ width: 400 }}>
      <Table
        data-cy="ingredient-table"
        size="small"
        aria-label="simple table"
        style={{ align: "center" }}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 100 }} align="right">
              Amount
            </TableCell>
            <TableCell align="right">Units</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient) => (
            <TableRow key={ingredient.name}>
              <TableCell align="right">{ingredient.amount}</TableCell>
              <TableCell align="right">{ingredient.unit}</TableCell>
              <TableCell align="right">{ingredient.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayIngredient;

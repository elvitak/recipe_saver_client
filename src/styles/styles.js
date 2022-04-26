import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardGrid: {
    padding: "20px 0"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    position: "left",
    marginRight: "20px",
    "&:hover": {
      color: "#d297ff"
    }
  }
}));

export default useStyles;

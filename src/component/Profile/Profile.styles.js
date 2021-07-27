import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    color: "rgb(36,0,119)",
  },
  cardSection: {
    display: "flex",
  },
}));

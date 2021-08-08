import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    background: '#0e111c',
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    color: "#fff",
    padding: theme.spacing(4, 8),
  },
  cardSection: {
    display: "flex",
  },
}));

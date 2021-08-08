import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(36,0,119)",
    background:
      "radial-gradient(circle, rgba(29,34,55,1) 0%, rgba(32,35,50,1) 48%, rgba(14,17,28,1) 100%)",
    color: "#fff",
    width: "50%",
    minHeight: 600,
    marginRight: theme.spacing(3),
    padding: theme.spacing(6, 4),
  },
}));

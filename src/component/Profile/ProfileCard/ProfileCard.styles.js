import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(36,0,119)",
    background:
      "radial-gradient(circle, rgba(29,34,55,1) 0%, rgba(32,35,50,1) 48%, rgba(14,17,28,1) 100%)",
      // "radial-gradient(circle, rgba(36,0,119,0.4593546036578694) 20%, rgba(16,0,53,0.6498307941340599) 67%, rgba(0,0,0,0.8206991414729954) 100%)",
    color: "#fff",
    width: "50%",
    minHeight: 600,
    marginRight: theme.spacing(3),
    padding: theme.spacing(6, 4),
  },
}));

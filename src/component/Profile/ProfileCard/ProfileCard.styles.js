import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(36,0,119)",
    background:
      "radial-gradient(circle, rgba(36,0,119,0.4593546036578694) 20%, rgba(16,0,53,0.6498307941340599) 67%, rgba(0,0,0,0.8206991414729954) 100%)",
    color: "#fff",
    width: "50%",
    minHeight: 600,
    marginRight: theme.spacing(3),
  },
}));

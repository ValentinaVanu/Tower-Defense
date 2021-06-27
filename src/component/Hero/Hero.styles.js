import { makeStyles } from "@material-ui/core";
import jungleBackground from "../../image/jungleBackground.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: `url(${jungleBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  video: {
    height: '100%',
    width: '100%'
  }
}))

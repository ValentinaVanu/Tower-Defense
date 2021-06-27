import { makeStyles } from "@material-ui/core";
import startImg from '../../image/start.jpg'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 42,

    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      opacity: 0.2,
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: `url(${startImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  video: {
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 52,
  },
  button: {
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(0, 4),
    backgroundColor: 'RGBA(63,140,181,0.32)',
    color: '#3f51b5',
  }
}))

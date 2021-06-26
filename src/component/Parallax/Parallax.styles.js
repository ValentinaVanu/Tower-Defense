import { makeStyles } from "@material-ui/core";
import DartMonkey from '../../image/DartMonkey.png'
import JungleBackground from '../../image/jungleBackground.jpg'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${JungleBackground})`,
    backgroundSize: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100&',
  },
  jungleLayer: {
  },
  dartMonkeyLayer: {
    backgroundImage: `url(${DartMonkey})`,
    backgroundSize: 'cover',
    width: 50,
    height: 50,
  },
  mageMonkeyLayer: {
    width: '15%',
    marginLeft: '70%'
  },
}))

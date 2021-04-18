import styled from 'styled-components';
import { makeStyles, Paper } from '@material-ui/core';


export const StyledSSPaper = styled(Paper)`
  && {
    max-width: 350px;
    height: 90%;
    position: fixed;
    bottom: 60px;
    left: 0;
    display: ${({ show }) => show ? 'block' : 'none'};
  }
`

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%%',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
  },
  // inline: {
  //   display: 'block',
  // },
}));
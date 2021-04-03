import styled from 'styled-components';
import { makeStyles, Paper } from '@material-ui/core';


export const StyledSSPaper = styled(Paper)`
  && {
    max-width: 400px;
    position: fixed;
    bottom: 60px;
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
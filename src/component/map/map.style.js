import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import MapImg from '../../image/map.png';

export const StyledMap = styled(Paper)`
  && {
    background-image: url(${MapImg});
    background-size: cover;
    width: 800px;
    height: 600px;
    position: relative;
  }
`
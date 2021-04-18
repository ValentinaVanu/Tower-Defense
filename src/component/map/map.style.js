import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import MapImg from '../../image/map.png';


export const XYMap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 50rem;
  height: 37.5rem;
`

export const XYCell = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledMap = styled(Paper)`
  && {
    background-image: url(${MapImg});
    background-size: cover;
    width: 800px;
    height: 600px;
    position: relative;
  }
`
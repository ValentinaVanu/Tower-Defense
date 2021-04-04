import styled from 'styled-components';
import DartMonkey from '../../image/Dart_Monkey.png'

export const StyledMonkey = styled.div`
  background-image: url(${DartMonkey});
  background-size: cover;
  width: 50px;
  height: 50px;
  position: absolute;
  top: ${({topY}) => topY - 50}px;
  left: ${({ leftX }) => leftX - 380}px;
`
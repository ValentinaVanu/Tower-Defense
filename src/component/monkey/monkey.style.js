import styled from 'styled-components';
import DartMonkey from '../../image/Dart_Monkey.png'

export const StyledMonkey = styled.div`
  background-image: url(${DartMonkey});
  background-size: cover;
  width: 50px;
  height: 50px;
  position: relative;
  top: ${({topY}) => topY}px;
  left: ${({ leftX }) => leftX - 420}px;
`
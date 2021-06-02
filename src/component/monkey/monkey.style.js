import styled from 'styled-components';
import DartMonkey from '../../image/Dart_Monkey.png'

export const StyledMonkey = styled.div`
  background-image: ${({ image }) => image ? `url(${image})` : `url(${DartMonkey})`} ;
  background-size: cover;
  width: ${({ width }) => width ? width : '50px'};
  height: ${({ height }) => height ? height : '50px'};
`
export const StyledMonkeyBtn = styled.button`
  background: center;
  border: none;
`

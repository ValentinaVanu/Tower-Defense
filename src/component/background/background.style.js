import styled from 'styled-components';
import startBackgroundImg from '../../image/start.jpg';

export const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${startBackgroundImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
`
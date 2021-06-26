import styled from 'styled-components';
import startBackgroundImg from '../../image/start.jpg';

export const StyledBackground = styled.div`
  height: 100%;
  ::after {
  content: "";
  background: url(${startBackgroundImg});
  background-position: center center;
  background-size: cover;
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
`

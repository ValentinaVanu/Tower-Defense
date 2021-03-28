import React from 'react';
import { StyledBackground } from './background.style';

const Background = ({ children }) => {
  return (
    <StyledBackground>{children}</StyledBackground>
  )
}

export { Background };
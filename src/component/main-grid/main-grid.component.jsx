import React from 'react';
import { StyledMainGrid } from './main-grid.style';

const MainGrid = ({ children }) => {
  return (
    <StyledMainGrid>{children}</StyledMainGrid>
  )
}

export { MainGrid };
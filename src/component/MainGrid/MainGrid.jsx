import React from 'react';
import { StyledMainGrid } from './MainGrid.style';

const MainGrid = ({ children }) => {
  return (
    <StyledMainGrid>{children}</StyledMainGrid>
  )
}

export { MainGrid };

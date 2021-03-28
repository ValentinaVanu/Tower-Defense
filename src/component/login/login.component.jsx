import React from 'react';
import { MainGrid } from '../main-grid';
import { StyledPaper } from './login.style';

const LogIn = () => {
  return (
    <MainGrid>
      <StyledPaper elevation={6}>Log in</StyledPaper>
    </MainGrid>
  )
};

export { LogIn };
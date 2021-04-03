import React from 'react';
import { StyledMap } from './map.style';

const Map = ({ children }) => {
  return (
    <StyledMap elevation={8}>{children}</StyledMap>
  )
};

export { Map };
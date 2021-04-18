import React from 'react';
import { StyledMap, XYCell, XYMap } from './map.style';

const Map = ({ children }) => {
  const XYmap = [...Array(100).keys()]
  return (
    // <StyledMap elevation={8}>{children}</StyledMap>
    <StyledMap>
      <XYMap>
        {XYmap.map(cell => {
          return (
            <XYCell>{cell}{children}</XYCell>
          )
        })}
      </XYMap>
    </StyledMap>
  )
};

export { Map };
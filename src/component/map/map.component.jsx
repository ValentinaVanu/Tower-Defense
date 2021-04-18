import React from 'react';
import { StyledMap, XYCell, XYMap } from './map.style';

const Map = ({ children }) => {
  const XYmap = [...Array(100).keys()]
  // const noMonkey = ['49', '48', '47', '46', '36', '26', '15', '14', '24', '34', '44', '45', '56', '57', '67', '68', '77', '76', '66', '55', '54', '53', '52', '42', '32', '31', '61', '71', '72', '73', '74', '84', '94']
  return (
    <StyledMap elevation={8}>
      <XYMap>
        {XYmap.map(cell => {
          // console.log(cell)
          return (
            <XYCell>{cell}{children}</XYCell>
          )
        })}
      </XYMap>
    </StyledMap>
  )
};

export { Map };
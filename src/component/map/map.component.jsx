import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMonkeyCoordinateAction, setPlacedMonkeyAction } from '../../store/monkey/monkey.action';
import { StyledMap, XYCell, XYMap } from './map.style';

const Map = ({ children }) => {
  const dispatch = useDispatch()
  const [placeMonkey, setPlaceMonkey] = useState({x:'', y: ''});
  const XYmap = [...Array(100).keys()];
  const noMonkey = ['49', '48', '47', '46', '36', '26', '15', '14', '24', '34', '44', '45', '56', '57', '67', '68', '77', '76', '66', '55', '54', '53', '52', '42', '32', '31', '61', '71', '72', '73', '74', '84', '94']
  
  const handlePlaceMonkey = (cellXY) => {
    let [cellX, cellY] =  cellXY && String(cellXY).split('')
    dispatch(setMonkeyCoordinateAction({ x: cellX, y: cellY || ""}))
    dispatch(setPlacedMonkeyAction({ x: cellX, y: cellY || ""}))
  }

  console.log(placeMonkey)
  return (
    <StyledMap elevation={8}>
      <XYMap>
        {XYmap.map(cell => {
          return (
            <XYCell onClick={() => handlePlaceMonkey(cell)}>{cell}{children}</XYCell>
          )
        })}
      </XYMap>
    </StyledMap>
  )
};

export { Map };
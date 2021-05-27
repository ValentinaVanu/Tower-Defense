import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setMonkeyCoordinateAction, setPlacedMonkeyAction } from '../../store/monkey/monkey.action';
import { StyledMap, XYCell, XYMap } from './map.style';

import { useDroppable } from "@dnd-kit/core";


const Map = ({ children }) => {
  const XYmap = [...Array(100).keys()];


  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <StyledMap elevation={8}>
      {/* <XYMap> */}
      <XYMap ref={setNodeRef} style={style}>
        {XYmap.map(cell => {
          return (
            <XYCell ref={setNodeRef} style={style} >{cell}{children}</XYCell>
          )
        })}
      </XYMap>
    </StyledMap>
  )
};

export { Map };

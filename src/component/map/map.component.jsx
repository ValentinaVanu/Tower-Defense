import React from "react";
// import { useDispatch } from 'react-redux';
// import { setMonkeyCoordinateAction, setPlacedMonkeyAction } from '../../store/monkey/monkey.action';
import { StyledMap, XYCell, XYMap } from "./map.style";

import { useDroppable } from "@dnd-kit/core";

const Map = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  console.log(id);
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <XYCell ref={setNodeRef} style={style}>
      {children}
    </XYCell>
  );
};

export { Map };

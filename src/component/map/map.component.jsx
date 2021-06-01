import React from 'react';
import { StyledMap, XYCell, XYMap } from './map.style';

import { useDroppable } from "@dnd-kit/core";


const Map = ({id, children}) => {


  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <StyledMap elevation={8}>
      <XYMap ref={setNodeRef} style={style}>
        {children}
      </XYMap>
    </StyledMap>
  )
};

export { Map };

import React from "react";
import { StyledMonkey, StyledMonkeyBtn } from "./monkey.style";
import {useDraggable} from '@dnd-kit/core';

const Monkey = ({ id, width, height, image}) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });

  const style = transform ? {
    zIndex: 999, 
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <StyledMonkeyBtn ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <StyledMonkey image={image} width={width} height={height}/>
    </StyledMonkeyBtn>
  );
};

export { Monkey };

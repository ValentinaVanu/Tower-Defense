import React from "react";
import { StyledMonkey } from "./monkey.style";
import {useDraggable} from '@dnd-kit/core';

const Monkey = (props) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <StyledMonkey/>
    </button>
  );
};

export { Monkey };

import React from "react";
import { XYCell } from "./map.style";
import { useDroppable } from "@dnd-kit/core";

const Map = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

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

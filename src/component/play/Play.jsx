import React, { useState } from "react";
import { Map } from "../Map";
import { Menu } from "../Menu";
import { Monkey } from '../Monkey'
import { StyledPlayWrapper } from "./Play.style";
import { DndContext } from "@dnd-kit/core";
import { StyledMap, XYMap } from "../Map/Map.style";
import { useDroppable } from "@dnd-kit/core";

const Play = () => {
  const XYmap = [...Array(100).keys()];
  const [parent, setParent] = useState(null);

  const draggableMonkey = <Monkey id= {"draggable"} />;
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
  };


  
  const handleDragEnd = (event) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return (
    <StyledPlayWrapper>
      <DndContext onDragEnd={handleDragEnd}>
        <StyledMap>
          <XYMap>
            {XYmap.map((id) => {
              return (
                <Map key={id} id={id} style={style} ref={setNodeRef}>
                  {id}
                  {parent === id  ? draggableMonkey : "Drop here"}
                </Map>
              );
            })}
          </XYMap>
        </StyledMap>
      <Menu  parent={parent} draggableMonkey={draggableMonkey}/>
      </DndContext>
    </StyledPlayWrapper>
  );
};

export { Play };

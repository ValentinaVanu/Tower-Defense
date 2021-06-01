import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMonkeyCoordinateAction,
  setPlacedMonkeyAction,
} from "../../store/monkey/monkey.action";
import { Map } from "../map";
import { Menu } from "../menu";
import { Monkey } from "../monkey/monkey.component";
import { StyledPlayWrapper } from "./play.style";

import { DndContext } from "@dnd-kit/core";
import { StyledMap, XYCell, XYMap } from "../map/map.style";
import { useDroppable } from "@dnd-kit/core";

const Play = () => {
  const XYmap = [...Array(100).keys()];
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  const [parent, setParent] = useState(null);

  const draggableMonkey = <Monkey id="draggable" />;

  const handleDragEnd = (event) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  // REFACTOR
  return (
    <StyledPlayWrapper>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMonkey : null}
        <StyledMap>
          <XYMap>
            {XYmap.map((id) => {
              console.log(id);
              return (
                <Map key={id} id={id} style={style} ref={setNodeRef}>
                  {id}
                  {parent === id ? draggableMonkey : "Drop here"}
                </Map>
              );
            })}
          </XYMap>
        </StyledMap>
      </DndContext>
      <Menu />
    </StyledPlayWrapper>
  );
};

export { Play };

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMonkeyCoordinateAction, setPlacedMonkeyAction } from "../../store/monkey/monkey.action";
import { Map } from "../map";
import { Menu } from "../menu";
import { Monkey } from "../monkey/monkey.component";
import { StyledPlayWrapper } from "./play.style";

import {DndContext} from '@dnd-kit/core';


const Play = () => {
  const dispatch = useDispatch();
  const [ placedMonkey, selectedImg] = useSelector(({ monkey }) => [
    // monkey.coordinate.x,
    // monkey.coordinate.y,
    monkey.placed,
    monkey.selected.img,
  ]);
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (event) => {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <StyledPlayWrapper selectedImg={selectedImg}>
      {!isDropped ? <Monkey/> : null}
      <DndContext onDragEnd={handleDragEnd}>
        <Map>
          {isDropped ? <Monkey/> : 'Drop here'}
        </Map>
        <Monkey/>
      </DndContext>
      <Menu />
    </StyledPlayWrapper>
  );
};

export { Play };

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMonkeyCoordinateAction, setPlacedMonkeyAction } from "../../store/monkey/monkey.action";
import { Map } from "../map";
import { Monkey } from "../monkey/monkey.component";
import { StyledPlayWrapper } from "./play.style";

const Play = () => {
  const dispatch = useDispatch();
  const [ placedMonkey, selectedImg] = useSelector(({ monkey }) => [
    // monkey.coordinate.x,
    // monkey.coordinate.y,
    monkey.placed,
    monkey.selected.img,
  ]);

  useEffect(() => {
    const setFromEvent = (e) => {
      if (
        e.clientY > 46 &&
        e.clientY < 600 &&
        e.clientX > 400 &&
        e.clientX < 1200
      ) {
        dispatch(setMonkeyCoordinateAction({ x: e.clientX, y: e.clientY }));
        dispatch(setPlacedMonkeyAction({ x: e.clientX, y: e.clientY }));
      } else {
        dispatch(setMonkeyCoordinateAction({ x: -400, y: -400 }));
        dispatch(setPlacedMonkeyAction({ x: -400, y: -400 }));
        // alert("Please place item on the map");
      }
    };
    window.addEventListener("click", setFromEvent);
    return () => {
      window.removeEventListener("click", setFromEvent);
    };
  }, []);

  return (
    <StyledPlayWrapper selectedImg={selectedImg}>
      {/* <div>
        x:{positionX} y:{positionY}
      </div> */}
      <Map>
        {placedMonkey && placedMonkey.map(m => {
          console.log(m)
          return (
            <Monkey key={m.x + m.y} topY={m.y} leftX={m.x} />
          )
        })
        }
      </Map>
    </StyledPlayWrapper>
  );
};

export { Play };

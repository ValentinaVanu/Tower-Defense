import React, { useState } from 'react';
import { Map } from '../map';
import { Monkey } from '../monkey/monkey.component';
import { useMousePosition } from '../util/mouse-position'
import { StyledPlayWrapper } from './play.style';

const Play = () => {
  const [monkey, placeMonkey] = useState(false);
  const mousePosition = useMousePosition()

  const HandleMonkeyPlacement = () => {
    placeMonkey(true)
    console.log(monkey)
  }

  const handlePositionOnMap = () => {
    if (mousePosition.y > 46 && mousePosition.y < 625 && mousePosition.x > 180 && mousePosition.x < 970 ){
      console.log('bun')
    } else {
      console.log('nope')
    }
  }

  return (
    <StyledPlayWrapper>
      {handlePositionOnMap()}
      <div>x:{mousePosition.x} y:{mousePosition.y}</div>
      <Map>
        <Monkey topY={mousePosition.y} leftX={mousePosition.x}/>
      </Map>
    </StyledPlayWrapper>
  )
}

export { Play };
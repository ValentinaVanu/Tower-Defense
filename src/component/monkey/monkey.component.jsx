import React from 'react';
import { StyledMonkey } from './monkey.style';

const Monkey = ({ topY, leftX }) => {
  return (
    <StyledMonkey/>
    // <StyledMonkey topY={topY} leftX={leftX} />
  )
};

export { Monkey };
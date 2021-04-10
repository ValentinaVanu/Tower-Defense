import { Button } from '@material-ui/core';
import React from 'react';
import { StyledBlueButton } from './button.style';

const BlueButton = ({ props, label }) => {
  return (
    <StyledBlueButton{...props}>{label}</StyledBlueButton>
  )
}

export { BlueButton };
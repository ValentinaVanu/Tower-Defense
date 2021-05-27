import { Button } from '@material-ui/core';
import React from 'react';
import { StyledBlueButton } from './button.style';


const BlueButton = ({ props, label, onClick }) => {
  return (
    <StyledBlueButton{...props} onClick={onClick}>{label}</StyledBlueButton>
  )
}

export { BlueButton };

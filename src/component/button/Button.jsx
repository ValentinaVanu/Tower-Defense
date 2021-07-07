import React from 'react';
import { StyledBlueButton } from './Button.style';


const BlueButton = ({ props, label, onClick }) => {
  return (
    <StyledBlueButton{...props} onClick={onClick}>{label}</StyledBlueButton>
  )
}

export { BlueButton };

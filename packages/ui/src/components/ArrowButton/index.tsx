import React from 'react';
import styled from 'styled-components';

import arrowbutton from '../../assets/arrowbutton.svg';

const StyledButton = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: transparent;
  transparency: 0;
  align-items: center;
  border: none;
  width: 10;
  height: auto;
  cursor: pointer;
  user-select: none;
`;

const StyledImage = styled.img<
  { rotation: number } & React.ImgHTMLAttributes<HTMLImageElement>
>`
  transform-origin: center;
  transform: rotate(${props => props.rotation}deg);
  will-change: transform;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(${props => props.rotation}deg);
  }

  &:active {
    transform: scale(1.05) rotate(${props => props.rotation}deg);
    transition: transform 0.05s ease-in-out;
  }
`;

export interface IArrowButtonProps {
  orientation: 'left' | 'right' | 'up' | 'down';
}

const ArrowButton: React.FC<
  IArrowButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ orientation, onClick }) => {
  let rotation = 0;
  switch (orientation) {
    case 'left':
      rotation = 0;
      break;
    case 'right':
      rotation = 180;
      break;
    case 'down':
      rotation = 270;
      break;
    case 'up':
      rotation = 90;
      break;
  }

  return (
    <StyledButton onClick={onClick}>
      <StyledImage rotation={rotation} src={arrowbutton} width={80} />
    </StyledButton>
  );
};

export default ArrowButton;

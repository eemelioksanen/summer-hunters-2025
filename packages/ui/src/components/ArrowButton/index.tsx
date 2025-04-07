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
  height: auto;
  cursor: pointer;
  user-select: none;
`;

const StyledImage = styled.img.withConfig({
  shouldForwardProp: prop =>
    !['animationDelay', 'rotation', 'width', 'height'].includes(prop),
})<
  {
    rotation: number;
    width?: number;
    height?: number;
  } & React.ImgHTMLAttributes<HTMLImageElement>
>`
  transform-origin: center;
  transform: rotate(${props => props.rotation}deg);
  will-change: transform;
  width: ${props => (props.width ? props.width + 'px' : 'auto')};
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
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
  width?: number;
  height?: number;
}

const ArrowButton: React.FC<
  IArrowButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ orientation, onClick, width, height }) => {
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
      <StyledImage
        height={height}
        width={width}
        rotation={rotation}
        src={arrowbutton}
      />
    </StyledButton>
  );
};

export default ArrowButton;

import React from 'react';
import styled from 'styled-components';

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
  transform-origin: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.05);
    transition: transform 0.05s ease-in-out;
  }
`;

const ImageButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default ImageButton;

import styled from 'styled-components';
import React from 'react';

export interface IPorcuSVGGroupProps extends React.SVGProps<SVGSVGElement> {
  animationSpeed: number;
  animation: string;
  xOrigin?: number;
  yOrigin?: number;
  delay?: number;
}

export interface IAnimatedGroupProps extends React.SVGProps<SVGGElement> {
  animation: string;
  animationSpeed: number;
  x: number;
  y: number;
  delay: number;
}

export const StyledAnimatedGroup = styled.g<IAnimatedGroupProps>`
  animation: ${props =>
    `${props.animation} ${props.animationSpeed}s ease-in-out infinite`};
  transform-origin: ${props => `${props.x}% ${props.y}%`};
  animation-delay: ${props => props.delay}s;
`;

const AnimatedGroup: React.FC<IPorcuSVGGroupProps> = ({
  children,
  animation = 'none',
  animationSpeed = 1,
  xOrigin = 0,
  yOrigin = 0,
  delay = 0,
}) => {
  return (
    <StyledAnimatedGroup
      animation={animation}
      animationSpeed={animationSpeed}
      x={xOrigin}
      y={yOrigin}
      delay={delay}
    >
      {children}
    </StyledAnimatedGroup>
  );
};

export default AnimatedGroup;

import React from 'react';
import styled from 'styled-components';

export interface IPorcuSVGGroupProps extends React.SVGProps<SVGSVGElement> {
  animation: string;
  animationDuration?: number;
  xOrigin?: number;
  yOrigin?: number;
  delay?: number;
}

export interface IAnimatedGroupProps extends React.SVGProps<SVGGElement> {
  animation: string;
  animationDuration: number;
  x: number;
  y: number;
  delay: number;
}

export const StyledAnimatedGroup = styled.g.withConfig({
  shouldForwardProp: prop =>
    !['animationDuration', 'animation', 'x', 'y', 'delay'].includes(prop),
})<IAnimatedGroupProps>`
  animation: ${props =>
    `${props.animation} ${props.animationDuration}s ease-in-out infinite`};
  transform-origin: ${props => `${props.x}% ${props.y}%`};
  animation-delay: ${props => props.delay}s;
`;

const AnimatedGroup: React.FC<IPorcuSVGGroupProps> = ({
  children,
  animation = 'none',
  animationDuration = 1,
  xOrigin = 0,
  yOrigin = 0,
  delay = 0,
}) => {
  return (
    <StyledAnimatedGroup
      animation={animation}
      animationDuration={animationDuration}
      x={xOrigin}
      y={yOrigin}
      delay={delay}
    >
      {children}
    </StyledAnimatedGroup>
  );
};

export default AnimatedGroup;

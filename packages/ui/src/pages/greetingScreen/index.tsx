import React from 'react';
import styled from 'styled-components';

import ArrowButton from '../../components/ArrowButton';
import BabyPorcu from '../../components/BabyPorcu';

const StyledFallingText = styled.div`
  font-family: 'Rubik Moonrocks', sans-serif;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  font-weight: bold;
  overflow: hidden;
  background-color: rgb(214, 255, 235);
  color: #54c4db;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface IStyledFallingText extends React.HTMLAttributes<HTMLSpanElement> {
  animationDelay: number;
}

interface IFallingText {
  text: string;
  playGame: () => void;
}

const StyledFallingTextSpan = styled.span.withConfig({
  shouldForwardProp: prop => prop !== 'animationDelay',
})<IStyledFallingText>`
  display: inline-block;
  transform: translateY(-100px);
  opacity: 0;
  animation: fall 0.5s ease-out forwards;
  animation-delay: ${props => props.animationDelay}s;
  user-select: none;
`;

const GreetingScreen: React.FC<IFallingText> = ({ text, playGame }) => {
  return (
    <StyledFallingText>
      <div>
        {text.split('').map((letter, index) => (
          <StyledFallingTextSpan key={index} animationDelay={index * 0.05}>
            {letter}
          </StyledFallingTextSpan>
        ))}
      </div>
      <ArrowButton onClick={playGame} width={100} orientation='right' />
      <BabyPorcu animate x={20} y={350} />
    </StyledFallingText>
  );
};

export default GreetingScreen;

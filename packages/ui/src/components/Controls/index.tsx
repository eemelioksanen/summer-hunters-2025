import React from 'react';
import styled from 'styled-components';

import ArrowButton from '../ArrowButton';
import Meter from '../Meter';
import { porcuYearInSeconds } from '../../constants/config';

import type { IGameState } from 'shared/types';

const StyledButtons = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledControlParentDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledMeterContainer = styled.div`
  padding: 0.5rem;
  gap: 0.5rem;
  display: flex;
  // background-color: rgba(255, 255, 255, 0.5);
`;

const StyledAgeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  font-weight: 800;
  font-size: 2.3rem;
  margin-left: auto;
  color: white;
  -webkit-text-stroke: 1.2px black;
  user-select: none;
`;

interface ControlProps extends IGameState {
  goLeft: () => void;
  goRight: () => void;
  children?: React.ReactNode;
}

const Controls: React.FC<ControlProps> = props => {
  return (
    <StyledControlParentDiv>
      <StyledMeterContainer>
        <Meter type='heart' percentage={props.health} />
        <Meter type='cutlery' percentage={props.hunger} />
        <Meter type='happiness' percentage={props.happiness} />
        <Meter type='lightning' percentage={props.energy} />
        <StyledAgeContainer>{`age: ${Math.floor(
          props.age / porcuYearInSeconds,
        )}`}</StyledAgeContainer>
      </StyledMeterContainer>
      <StyledButtons>
        <ArrowButton onClick={props.goLeft} orientation='left' />
        {props.children}
        <ArrowButton onClick={props.goRight} orientation='right' />
      </StyledButtons>
    </StyledControlParentDiv>
  );
};

export default Controls;

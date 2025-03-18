import React from 'react';
import styled from 'styled-components';

import ArrowButton from '../ArrowButton';
import Meter from '../Meter';
import { porcuYearInSeconds } from '../../constants/config';
import { SaveIcon, QuitIcon } from '../../assets';

import type { IGameState } from 'shared/types';
import ImageButton from '../ImageButton';

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
  padding-left: 0.5rem;
  gap: 0.5rem;
  display: flex;
  // background-color: rgba(255, 255, 255, 0.5);
`;

const StyledAgeContainer = styled.div`
  width: 8.5rem;
  white-space: nowrap;
  padding-left: 0.8rem;
  font-family: 'Comic Sans MS', sans-serif;
  padding-top: 0;
  font-weight: 800;
  margin-left: auto;
  padding-right: 0.5rem;
  background-color: #f5cb1c;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  border-bottom-left-radius: 0.6rem;
  font-size: 1.8rem;
  padding-top: 0.3rem;
  color: black;
  letter-spacing="2"
  -webkit-text-stroke: 1.2px black;
  user-select: none;
`;

const StyledSaveExitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-right: 0.5rem;
`;

interface ControlProps extends IGameState {
  goLeft: () => void;
  goRight: () => void;
  saveGame: () => void;
  quitGame: () => void;
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
        <StyledAgeContainer>
          {`age: ${Math.floor(props.age / porcuYearInSeconds)}`}
        </StyledAgeContainer>
      </StyledMeterContainer>
      <StyledSaveExitButtonContainer>
        <ImageButton onClick={props.saveGame}>
          <SaveIcon />
        </ImageButton>
        <ImageButton onClick={props.quitGame}>
          <QuitIcon width={40} />
        </ImageButton>
      </StyledSaveExitButtonContainer>
      <StyledButtons>
        <ArrowButton onClick={props.goLeft} orientation='left' />
        {props.children}
        <ArrowButton onClick={props.goRight} orientation='right' />
      </StyledButtons>
    </StyledControlParentDiv>
  );
};

export default Controls;

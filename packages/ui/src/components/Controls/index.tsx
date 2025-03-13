import React from 'react';
import ArrowButton from '../ArrowButton';
import styled from 'styled-components';
import { changeBackground, RoomType } from '../Background';
import Meter from '../Meter';

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

const Controls = () => {
  const rooms: RoomType[] = ['bedroom', 'kitchen', 'livingroom'];
  let roomIdx = 0;

  const goLeft = () => {
    roomIdx = roomIdx == 0 ? rooms.length - 1 : roomIdx - 1;
    changeBackground(rooms[roomIdx]);
  };

  const goRight = () => {
    roomIdx = (roomIdx + 1) % rooms.length;
    changeBackground(rooms[roomIdx]);
  };

  return (
    <StyledControlParentDiv>
      <StyledMeterContainer>
        <Meter type='heart' percentage={50} />
        <Meter type='cutlery' percentage={50} />
        <Meter type='happiness' percentage={50} />
        <Meter type='lightning' percentage={50} />
      </StyledMeterContainer>
      <StyledButtons>
        <ArrowButton onClick={goLeft} orientation='left' />
        <ArrowButton onClick={goRight} orientation='right' />
      </StyledButtons>
    </StyledControlParentDiv>
  );
};

export default Controls;

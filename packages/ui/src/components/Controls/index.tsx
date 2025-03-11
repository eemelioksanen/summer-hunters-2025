import React from 'react';
import ArrowButton from '../buttons/ArrowButton';
import styled from 'styled-components';
import { changeBackground } from '../Background';
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
`;

const Controls = () => {
  return (
    <StyledControlParentDiv>
      <StyledMeterContainer>
        <Meter type='heart' value={50} />
      </StyledMeterContainer>
      <StyledButtons>
        <ArrowButton
          onClick={() => changeBackground('bedroom')}
          orientation='left'
        />
        <ArrowButton
          onClick={() => changeBackground('kitchen')}
          orientation='right'
        />
      </StyledButtons>
    </StyledControlParentDiv>
  );
};

export default Controls;

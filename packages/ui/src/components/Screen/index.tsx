import React from 'react';
import styled from 'styled-components';

import { screenHeight, screenWidth } from '../../constants/config';

const StyledScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoundingBox = styled.div`
  top: 4.5rem;
  position: relative;
  height: ${screenHeight}rem;
  border-radius: 3%;
  width: ${screenWidth}rem;
  overflow: hidden;
  z-index: -1;
`;

export interface IScreenProps {
  children?: React.ReactNode;
}

export const Screen: React.FC<IScreenProps> = ({ children, ...restProps }) => {
  return (
    <StyledScreen>
      <BoundingBox {...restProps}>{children}</BoundingBox>
    </StyledScreen>
  );
};

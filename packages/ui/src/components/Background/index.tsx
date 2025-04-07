import React, { ReactNode } from 'react';
import styled from 'styled-components';

import bedroom from '../../assets/backgrounds/bedroom.webp';
import kitchen from '../../assets/backgrounds/kitchen.webp';
import livingroom from '../../assets/backgrounds/livingroom.webp';
import { screenHeight } from '../../constants/config';

import type { IRoom } from '../../types/types';

const StyledImage = styled.img<{ src: string }>`
  height: 100%;
  z-index: -1;
`;

const BackgroundArrayDiv = styled.div.withConfig({
  shouldForwardProp: prop => !['animationDelay', 'moveX'].includes(prop),
})<{ moveX: number; children: ReactNode }>`
  user-select: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  ${props => `transform: translateX(${props.moveX}rem)`};
  opacity: 0.6;
`;

const images = { bedroom, kitchen, livingroom };
const [backgroundNames, backgrounds] = [
  Object.keys(images),
  Object.values(images),
];

const ImageArray = ({ moveX }: { moveX: number }) => (
  <BackgroundArrayDiv moveX={moveX}>
    {backgrounds.map((image, idx) => (
      <StyledImage src={image} key={idx} />
    ))}
  </BackgroundArrayDiv>
);

const Background = ({ room }: { room: IRoom }) => {
  const roomIdx = backgroundNames.indexOf(room);
  return <ImageArray moveX={-roomIdx * screenHeight} />;
};

export default Background;

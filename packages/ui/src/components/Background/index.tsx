import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import bedroom from '../../assets/backgrounds/bedroom_new.webp';
import kitchen from '../../assets/backgrounds/kitchen_new.webp';
import livingroom from '../../assets/backgrounds/livingroom_new.webp';
import { screenHeight } from '../../constants/config';

const StyledImage = styled.img<{ src: string }>`
  height: 100%;
  z-index: -1;
`;

export type RoomType = 'bedroom' | 'kitchen' | 'livingroom';

const BackgroundArrayDiv = styled.div<{ moveX: number; children: ReactNode }>`
  user-select: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  ${props => `transform: translateX(${props.moveX}rem)`};
  opacity: 0.85;
`;

const images = [bedroom, kitchen, livingroom];
const ImageArray = ({ moveX }: { moveX: number }) => (
  <BackgroundArrayDiv moveX={moveX}>
    {images.map((image, idx) => (
      <StyledImage src={image} key={idx} />
    ))}
  </BackgroundArrayDiv>
);

const Background = () => {
  const [offset, setOffset] = useState(0);

  // screen height = image width
  useEffect(() => {
    const handleChangeBackground = (event: CustomEvent) => {
      const { room } = event.detail;
      if (room == 'bedroom') {
        setOffset(0);
      } else if (room == 'kitchen') {
        setOffset(-screenHeight);
      } else if (room == 'livingroom') {
        setOffset(-2 * screenHeight);
      }
    };

    window.addEventListener(
      'changeBackground',
      handleChangeBackground as EventListener,
    );

    return () => {
      window.removeEventListener(
        'changeBackground',
        handleChangeBackground as EventListener,
      );
    };
  }, []);
  return <ImageArray moveX={offset} />;
};

export default Background;
export const changeBackground = (room: RoomType) => {
  const event = new CustomEvent('changeBackground', { detail: { room } });
  window.dispatchEvent(event);
};

import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import bedroom from '../../assets/backgrounds/bedroom.png';
import kitchen from '../../assets/backgrounds/kitchen.png';
import { screenHeight } from '../../constants/config';

const StyledImage = styled.img<{ src: string }>`
  height: 100%;
  z-index: -1;
`;

interface BackgroundProps {
  room: 'bedroom' | 'kitchen';
}

const BackgroundArrayDiv = styled.div<{ moveX: number; children: ReactNode }>`
  user-select: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  ${props => `transform: translateX(${props.moveX}rem)`};
  opacity: 0.5;
`;

const images = [bedroom, kitchen];
const ImageArray = ({ moveX }: { moveX: number }) => (
  <BackgroundArrayDiv moveX={moveX}>
    {images.map((image, idx) => (
      <StyledImage src={image} key={idx} />
    ))}
  </BackgroundArrayDiv>
);

const Background: React.FC<BackgroundProps> = ({ room }) => {
  const [offset, setOffset] = useState(0);

  // screen height = image width
  useEffect(() => {
    const handleChangeBackground = (event: CustomEvent) => {
      const { room } = event.detail;
      if (room == 'bedroom') {
        setOffset(0);
      } else if (room == 'kitchen') {
        setOffset(-screenHeight);
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
export const changeBackground = (room: 'bedroom' | 'kitchen') => {
  const event = new CustomEvent('changeBackground', { detail: { room } });
  window.dispatchEvent(event);
};

import styled from 'styled-components';

import baby_porcu from './baby_porcu.svg';
import frame from './frame.svg';
import burger from './burger.svg';
import sleep from './sleep.svg';

export const BabyPorcuIcon = styled.img.attrs({ src: baby_porcu })``;
export const Frame = styled.img.attrs((props: { width: number }) => ({
  src: frame,
  width: props.width,
}))``;
export const Burger = styled.img.attrs({ src: burger })``;
export const Sleep = styled.img.attrs({ src: sleep })``;

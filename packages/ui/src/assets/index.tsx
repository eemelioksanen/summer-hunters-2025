import styled from 'styled-components';
import React, { ImgHTMLAttributes } from 'react';

import baby_porcu from './baby_porcu.svg';
import porcu from './porcu.svg';
import frame from './frame.svg';
import burger from './burger.svg';
import sleep from './sleep.svg';
import trashcan from './trashcan.svg';

interface ICustomIconProps {
  width?: number;
  height?: number;
}

const createStyledIcon = (src: string) => styled.img.attrs<ICustomIconProps>(
  () => ({
    src,
  }),
)<ICustomIconProps>`
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
`;

export const BabyPorcuIcon = createStyledIcon(baby_porcu);
export const PorcuIcon = createStyledIcon(porcu);
export const Frame = createStyledIcon(frame);
export const Burger = createStyledIcon(burger);
export const Sleep = createStyledIcon(sleep);
export const TrashCan = createStyledIcon(trashcan);

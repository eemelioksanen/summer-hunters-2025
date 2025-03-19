import React from 'react';
import styled from 'styled-components';

import AnimatedGroup from '../AnimatedGroup';

import type { IPorcuProps } from '../../types/types';

const StyledParentSVG = styled.svg<React.SVGProps<SVGSVGElement>>`
  position: absolute;
  left: 0;
  top: 0;
`;

const BabyPorcu: React.FC<IPorcuProps> = ({
  animate = false,
  eat = false,
  happy = false,
  sleep = false,
  size = 100,
  animationDuration = 1,
  x = 0,
  y = 0,
}) => {
  let bodyAnimation: string;
  let tailAnimation: string;
  let eatAnimation: string;
  if (animate) {
    if (eat) {
      bodyAnimation = 'none';
      tailAnimation = 'none';
      eatAnimation = 'babyPorcuEatAnimation';
    } else {
      bodyAnimation = sleep ? 'babyPorcuSleepAnimation' : 'bounce';
      tailAnimation = sleep ? 'none' : 'babyPorcuBounceTail';
      eatAnimation = 'none';
    }
  } else {
    bodyAnimation = 'none';
    tailAnimation = 'none';
    eatAnimation = 'none';
  }

  return (
    <StyledParentSVG
      height={size}
      viewBox='0 -50 58 98'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform={`translate(${x}, ${y})`}
    >
      {/* body */}
      <AnimatedGroup
        animation={bodyAnimation}
        animationDuration={animationDuration}
      >
        {/* tail */}
        <AnimatedGroup
          animation={tailAnimation}
          animationDuration={animationDuration}
          xOrigin={60}
          yOrigin={25}
          delay={-0.629}
        >
          <path
            d='M12.7815 31.3114L6.23157 33.3114C5.69839 33.4737 5.13459 33.509 4.58533 33.4144C4.03607 33.3198 3.51657 33.0978 3.06848 32.7663C2.6204 32.4349 2.25615 32.0031 2.00489 31.5056C1.75362 31.0081 1.62239 30.4587 1.62159 29.9013V18.4214C1.62083 17.8632 1.75087 17.3126 2.00147 16.8138C2.25207 16.315 2.61616 15.882 3.06446 15.5494C3.51276 15.2168 4.03287 14.994 4.58289 14.8988C5.13291 14.8036 5.69759 14.8387 6.23157 15.0013L12.7815 17.0013V31.3114Z'
            fill='#F560B9'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </AnimatedGroup>
        <path
          d='M33.6215 46.4513C45.932 46.4513 55.9115 36.4718 55.9115 24.1613C55.9115 11.8509 45.932 1.87134 33.6215 1.87134C21.3111 1.87134 11.3315 11.8509 11.3315 24.1613C11.3315 36.4718 21.3111 46.4513 33.6215 46.4513Z'
          fill='#54C4DB'
          stroke='#1D1D1B'
          strokeWidth='3'
          strokeMiterlimit='10'
        />
        {/* eyes */}
        {sleep || happy ? (
          <g>
            <path
              d='m 36.243629,19.128792 c 0.983,0 1.837871,0.765608 1.837871,-0.217492 0,-0.983 -0.797,-1.78 -1.78,-1.78 -0.9831,0 -1.78,0.797 -1.78,1.78 0,0.9831 0.739029,0.217492 1.722129,0.217492 z'
              fill='#1d1d1b'
            />
            <path
              d='m 46.568506,19.226081 c 0.983,0 1.693194,0.668319 1.693194,-0.314781 0,-0.983 -0.797,-1.78 -1.78,-1.78 -0.9831,0 -1.78,0.797 -1.78,1.78 0,0.9831 0.883706,0.314781 1.866806,0.314781 z'
              fill='#1d1d1b'
            />
          </g>
        ) : (
          <g>
            <path
              d='M36.3015 20.6913C37.2845 20.6913 38.0815 19.8944 38.0815 18.9113C38.0815 17.9283 37.2845 17.1313 36.3015 17.1313C35.3184 17.1313 34.5215 17.9283 34.5215 18.9113C34.5215 19.8944 35.3184 20.6913 36.3015 20.6913Z'
              fill='#1D1D1B'
            />
            <path
              d='M46.4817 20.6913C47.4647 20.6913 48.2617 19.8944 48.2617 18.9113C48.2617 17.9283 47.4647 17.1313 46.4817 17.1313C45.4986 17.1313 44.7017 17.9283 44.7017 18.9113C44.7017 19.8944 45.4986 20.6913 46.4817 20.6913Z'
              fill='#1D1D1B'
            />
          </g>
        )}
        <AnimatedGroup animation={eatAnimation} animationDuration={0.5}>
          {eat ? (
            <path
              d='m 36.485694,24.359458 c 0,0 0.375112,2.680276 2.557476,2.680276 2.572684,0 2.740617,-1.871896 3.089867,-1.871896 0.317344,0 0.820677,1.937494 3.059462,1.937494 2.324259,0 2.822149,-2.698062 2.822149,-2.698062'
              stroke='#1d1d1b'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          ) : (
            <path
              d='M46.4816 24.6114C46.4816 25.9613 45.9453 27.256 44.9907 28.2105C44.0362 29.1651 42.7414 29.7014 41.3915 29.7014C40.0415 29.7014 38.7469 29.1651 37.7924 28.2105C36.8378 27.256 36.3015 25.9613 36.3015 24.6114'
              stroke='#1D1D1B'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          )}
        </AnimatedGroup>
      </AnimatedGroup>
    </StyledParentSVG>
  );
};

export default BabyPorcu;

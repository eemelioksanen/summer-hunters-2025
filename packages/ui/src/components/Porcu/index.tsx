import React from 'react';
import styled from 'styled-components';

import AnimatedGroup from '../AnimatedGroup';

import type { IPorcuProps } from '../../types/types';

const StyledParentSVG = styled.svg<React.SVGProps<SVGSVGElement>>`
  position: absolute;
  left: 0;
  top: 0;
`;

const getCurrentAnimation = (
  animate: boolean,
  eat: boolean,
  sleep: boolean,
) => {
  if (!animate) {
    return {
      bodyAnimation: 'none',
      eatAnimation: 'none',
    };
  }
  return {
    bodyAnimation: sleep ? 'porcuSleepAnimation' : 'porcuBodyAnimation',
    eatAnimation: eat ? 'porcuEatAnimation' : 'none',
  };
};

const Porcu: React.FC<IPorcuProps> = ({
  animate = false,
  eat = false,
  happy = false,
  sleep = false,
  size = 100,
  animationDuration = 1.8,
  x = 0,
  y = 0,
}) => {
  const rightWingAnimation = animate ? 'porcuRightWingAnimation' : 'none';
  const leftWingAnimation = animate ? 'porcuLeftWingAnimation' : 'none';
  const tailAnimation = animate ? 'porcuTailAnimation' : 'none';

  const { bodyAnimation, eatAnimation } = getCurrentAnimation(
    animate,
    eat,
    sleep,
  );

  const eyesClosed = sleep || happy;

  return (
    <StyledParentSVG
      height={size}
      viewBox='0 0 175 205'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform={`translate(${x}, ${y})`}
    >
      {/* right leg */}
      <path
        d='M113.034 112.429V188.644C116.535 189.16 119.734 190.918 122.048 193.596C124.361 196.274 125.635 199.695 125.637 203.234H103.921V112.429H113.034Z'
        fill='#54C4DB'
        stroke='#1D1D1B'
        strokeWidth='3'
        strokeMiterlimit='10'
      />
      <path
        d='M113.034 188.644H110.235'
        stroke='#1D1D1B'
        strokeWidth='3'
        strokeMiterlimit='10'
      />
      {/* left leg */}
      <path
        d='M95.0953 112.429V188.644C98.5966 189.16 101.796 190.918 104.109 193.596C106.423 196.274 107.697 199.695 107.699 203.234H85.9832V112.429H95.0953Z'
        fill='#54C4DB'
        stroke='#1D1D1B'
        strokeWidth='3'
        strokeMiterlimit='10'
      />
      <path
        d='M95.0952 188.644H92.2961'
        stroke='#1D1D1B'
        strokeWidth='3'
        strokeMiterlimit='10'
      />
      {/* body */}
      <AnimatedGroup
        animationDuration={animationDuration}
        animation={bodyAnimation}
      >
        {/* right wing */}
        <AnimatedGroup
          animation={rightWingAnimation}
          animationDuration={animationDuration}
          xOrigin={75}
          yOrigin={40}
        >
          <path
            d='M142.228 102.858L157.119 115.612C158.135 116.481 159.454 116.912 160.787 116.811C162.12 116.709 163.358 116.083 164.23 115.07C164.661 114.568 164.99 113.985 165.196 113.356C165.402 112.727 165.482 112.063 165.432 111.402C165.382 110.742 165.202 110.098 164.903 109.507C164.603 108.917 164.191 108.391 163.688 107.959L162.8 107.207C164.028 107.692 165.396 107.675 166.611 107.16C167.826 106.645 168.79 105.673 169.294 104.453C169.802 103.234 169.81 101.863 169.316 100.638C168.822 99.4131 167.865 98.4319 166.653 97.9067L167.827 97.9895C168.494 98.0528 169.167 97.9822 169.807 97.7821C170.447 97.582 171.041 97.2562 171.553 96.8239C172.066 96.3916 172.487 95.8614 172.792 95.2644C173.097 94.6673 173.28 94.0155 173.33 93.3469C173.38 92.6783 173.296 92.0065 173.083 91.3707C172.87 90.7349 172.533 90.148 172.091 89.6442C171.648 89.1404 171.11 88.7299 170.507 88.4367C169.904 88.1435 169.248 87.9736 168.579 87.9368L149.015 86.4319'
            fill='#54C4DB'
          />
          <path
            d='M142.228 102.858L157.119 115.612C158.135 116.481 159.454 116.912 160.787 116.811C162.12 116.709 163.358 116.083 164.23 115.07V115.07C164.661 114.568 164.99 113.985 165.196 113.356C165.402 112.727 165.482 112.063 165.432 111.402C165.382 110.742 165.202 110.098 164.903 109.507C164.603 108.917 164.191 108.391 163.688 107.959L162.8 107.207C164.028 107.692 165.396 107.675 166.611 107.16C167.826 106.645 168.79 105.673 169.294 104.453V104.453C169.802 103.234 169.81 101.863 169.316 100.638C168.822 99.4131 167.865 98.4319 166.653 97.9067L167.827 97.9895C168.494 98.0528 169.167 97.9822 169.807 97.7821C170.447 97.582 171.041 97.2562 171.553 96.8239C172.066 96.3916 172.487 95.8614 172.792 95.2644C173.097 94.6673 173.28 94.0155 173.33 93.3469C173.38 92.6783 173.296 92.0065 173.083 91.3707C172.87 90.7349 172.533 90.148 172.091 89.6442C171.648 89.1404 171.11 88.7299 170.507 88.4367C169.904 88.1435 169.248 87.9736 168.579 87.9368L149.015 86.4319'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </AnimatedGroup>
        <path
          d='M147.014 24.942C147.014 24.942 146.6 29.9985 121.995 29.5846C124.734 25.3183 124.569 22.9556 124.569 22.9556L129.204 22.6019L147.014 24.942Z'
          fill='#1D1D1B'
          stroke='#1D1D1B'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        {/* tail */}
        <AnimatedGroup
          animation={tailAnimation}
          animationDuration={animationDuration}
          xOrigin={45}
          yOrigin={35}
        >
          <path
            d='M49.4143 86.3417L21.1148 101.135C19.5877 101.934 17.9182 102.424 16.2015 102.578C14.4849 102.732 12.7547 102.546 11.1099 102.031C9.46503 101.516 7.93777 100.682 6.6153 99.5767C5.29281 98.4714 4.20099 97.1164 3.40224 95.5891C2.98762 94.7948 2.65487 93.9603 2.40906 93.0986L49.4143 79.6147V86.3417Z'
            fill='#F560B9'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M49.4143 79.6147L2.40905 93.0986C1.58659 90.1965 1.78837 87.0997 2.98055 84.3289C4.17273 81.5581 6.28255 79.2823 8.95529 77.8841L13.47 75.5064H49.3917L49.4143 79.6147Z'
            fill='#F560B9'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.9553 73.1362C6.01245 71.5956 3.76286 68.9969 2.65981 65.8637C1.55677 62.7305 1.68224 59.2957 3.01096 56.2513L49.4143 69.5696V75.5064H13.4926L8.9553 73.1362Z'
            fill='#F560B9'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3.40224 55.4236C5.01688 52.3406 7.78948 50.0247 11.1108 48.9848C14.4321 47.945 18.0303 48.2663 21.1148 49.8781L49.4143 64.6712V69.5696L3.01096 56.2513C3.13135 55.9729 3.25928 55.7321 3.40224 55.4236Z'
            fill='#F560B9'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M49.4143 69.5696V86.3417L32.7702 95.0399C26.9092 82.4273 26.1595 68.0352 30.6784 54.8819L49.4143 64.6637V69.5696Z'
            fill='#1D1D1B'
          />
        </AnimatedGroup>

        <path
          d='M113.034 129.336C110.037 130.128 106.994 130.728 103.922 131.135V112.429H113.034V129.336Z'
          fill='#1D1D1B'
          stroke='#1D1D1B'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <path
          d='M95.0952 131.661C93.7408 131.737 92.3865 131.774 91.017 131.774C89.324 131.774 87.646 131.714 85.9831 131.609V112.429H95.0952V131.661Z'
          fill='#1D1D1B'
          stroke='#1D1D1B'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M94.1621 127.997C59.8199 127.997 31.9801 103.088 31.9801 72.3612C31.9801 41.6343 59.8199 16.7253 94.1621 16.7253C128.504 16.7253 156.344 41.6343 156.344 72.3612C156.344 103.088 128.504 127.997 94.1621 127.997Z'
          fill='#54C4DB'
          stroke='#1D1D1B'
          strokeWidth='3'
          strokeMiterlimit='10'
        />

        {/* eyes */}
        <g>
          {eyesClosed ? (
            <path
              d='m 113.214,36.8156 c 2.243,-9e-4 4.464,0.44 6.536,1.2975 2.072,0.8576 3.955,2.115 5.541,3.7004 1.587,1.5855 2.845,3.468 3.703,5.5399 0.859,2.0719 1.301,4.2926 1.301,6.5353 h -7.788 -26.3734 c 0,-2.2427 0.4419,-4.4634 1.3004,-6.5353 0.8584,-2.0719 2.1167,-3.9544 3.703,-5.5399 1.586,-1.5854 3.469,-2.8428 5.541,-3.7004 2.073,-0.8575 4.294,-1.2984 6.536,-1.2975 z'
              fill='#54c4db'
              stroke='#1d1d1b'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          ) : (
            <path
              d='M113.214 36.8156C115.457 36.8147 117.678 37.2556 119.75 38.1131C121.822 38.9707 123.705 40.2281 125.291 41.8135C126.878 43.399 128.136 45.2815 128.994 47.3534C129.853 49.4253 130.295 51.646 130.295 53.8887H122.507C122.507 51.4241 121.528 49.0605 119.785 47.3177C118.042 45.575 115.679 44.5959 113.214 44.5959C110.75 44.5959 108.386 45.575 106.643 47.3177C104.901 49.0605 103.922 51.4241 103.922 53.8887H96.1336C96.1336 51.646 96.5755 49.4253 97.434 47.3534C98.2924 45.2815 99.5507 43.399 101.137 41.8135C102.723 40.2281 104.606 38.9707 106.678 38.1131C108.751 37.2556 110.972 36.8147 113.214 36.8156Z'
              fill={sleep ? '#54C4DB' : 'white'}
              stroke='#1D1D1B'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          )}
          <path
            d='M103.921 53.8887H130.257C130.257 58.4187 128.458 62.7632 125.254 65.9664C122.051 69.1696 117.707 70.9692 113.177 70.9692C108.646 70.9692 104.302 69.1696 101.099 65.9664C97.8956 62.7632 96.096 58.4187 96.096 53.8887H103.921Z'
            fill='#54C4DB'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeMiterlimit='10'
          />
          {!eyesClosed ? (
            <path
              d='M113.214 44.6035C114.434 44.6025 115.642 44.842 116.77 45.3081C117.897 45.7743 118.922 46.4581 119.785 47.3204C120.648 48.1827 121.332 49.2066 121.799 50.3336C122.266 51.4606 122.507 52.6687 122.507 53.8887H103.921C103.921 52.6687 104.162 51.4606 104.629 50.3336C105.096 49.2066 105.781 48.1827 106.644 47.3204C107.507 46.4581 108.531 45.7743 109.659 45.3081C110.786 44.842 111.994 44.6025 113.214 44.6035Z'
              fill='#1D1D1B'
            />
          ) : null}
          {eyesClosed ? (
            <path
              d='m 148.158,36.8156 c 2.242,-9e-4 4.463,0.44 6.536,1.2975 2.072,0.8576 3.955,2.115 5.541,3.7004 1.586,1.5855 2.844,3.468 3.703,5.5399 0.858,2.0719 1.3,4.2926 1.3,6.5353 h -34.161 c 0.002,-4.5287 1.803,-8.8714 5.006,-12.0729 3.203,-3.2016 7.546,-5.0002 12.075,-5.0002 z'
              fill='#54c4db'
              stroke='#1d1d1b'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          ) : (
            <path
              d='M148.158 36.8156C150.4 36.8147 152.621 37.2556 154.694 38.1131C156.766 38.9707 158.649 40.2281 160.235 41.8135C161.821 43.399 163.079 45.2815 163.938 47.3534C164.796 49.4253 165.238 51.646 165.238 53.8887H157.45C157.45 51.4241 156.471 49.0605 154.729 47.3177C152.986 45.575 150.622 44.5959 148.158 44.5959C145.693 44.5959 143.329 45.575 141.587 47.3177C139.844 49.0605 138.865 51.4241 138.865 53.8887H131.077C131.079 49.36 132.88 45.0173 136.083 41.8158C139.286 38.6142 143.629 36.8156 148.158 36.8156Z'
              fill='white'
              stroke='#1D1D1B'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          )}
          <path
            d='M138.865 53.8887H165.201C165.201 58.4187 163.401 62.7632 160.198 65.9664C156.995 69.1696 152.65 70.9692 148.12 70.9692C143.59 70.9692 139.246 69.1696 136.042 65.9664C132.839 62.7632 131.04 58.4187 131.04 53.8887H138.865Z'
            fill='#54C4DB'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeMiterlimit='10'
          />
          {!eyesClosed ? (
            <path
              d='M148.158 44.6035C149.378 44.6025 150.586 44.842 151.713 45.3081C152.841 45.7743 153.865 46.4581 154.728 47.3204C155.591 48.1827 156.276 49.2066 156.743 50.3336C157.21 51.4606 157.45 52.6687 157.45 53.8887H138.865C138.865 52.6687 139.106 51.4606 139.573 50.3336C140.04 49.2066 140.724 48.1827 141.587 47.3204C142.45 46.4581 143.475 45.7743 144.602 45.3081C145.73 44.842 146.938 44.6025 148.158 44.6035Z'
              fill='#1D1D1B'
            />
          ) : null}
        </g>

        {/* mouth */}
        {eat ? (
          <AnimatedGroup animation={eatAnimation} animationDuration={0.5}>
            <path
              d='m 144.9986,85.360052 c 2.475,-2.4756 3.868,-5.8322 3.872,-9.3333 -0.003,-1.5405 -0.4935,-3.0405 -1.401,-4.2854 -0.9075,-1.2449 -2.185,-2.1708 -3.651,-2.6451 -1.465,-0.4744 -3.043,-0.4728 -4.508,0.0044 -0.53558,0.174454 -1.0476,0.869481 -2.95513,1.580905 -3.42773,1.278386 -7.15579,1.042243 -9.16701,0.328641 -1.45198,-0.51518 -3.1839,-1.260781 -4.6479,-1.739081 -1.465,-0.4782 -3.044,-0.4801 -4.51,-0.0054 -1.466,0.4747 -2.743,1.4016 -3.65,2.6477 -0.906,1.2461 -1.394,2.7473 -1.395,4.2881 0.002,3.5004 1.393,6.857 3.868,9.3328 3.27622,3.278735 16.4939,8.375702 28.14504,-0.174265 z'
              fill='#f560b9'
              stroke='#1d1d1b'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='m 131.23416,81.842538 c 1.905,0 7.70692,-0.384623 9.05492,-1.730623 0.59608,-0.99917 0.0991,-2.215975 -1.807,-1.8042 -2.19383,1.02258 -6.02092,0.984023 -7.24792,0.984023 -1.227,0 -5.02476,-0.356572 -6.43963,-1.115097 -1.92897,-0.285999 -1.96226,1.276205 -1.677,1.95775 1.346,1.3458 6.21363,1.706147 8.11663,1.708147 z'
              fill='#1d1d1b'
            />
          </AnimatedGroup>
        ) : (
          <g>
            <path
              d='M131.077 89.4944C134.578 89.4904 137.935 88.0978 140.411 85.6222C142.886 83.1466 144.279 79.79 144.283 76.2889C144.28 74.7484 143.79 73.2484 142.882 72.0035C141.975 70.7586 140.697 69.8327 139.231 69.3584C137.766 68.884 136.188 68.8856 134.723 69.3628C133.258 69.84 131.982 70.7684 131.077 72.0151C130.174 70.7668 128.898 69.8368 127.434 69.3585C125.969 68.8803 124.39 68.8784 122.924 69.3531C121.458 69.8278 120.181 70.7547 119.274 72.0008C118.368 73.2469 117.88 74.7481 117.879 76.2889C117.881 79.7893 119.272 83.1459 121.747 85.6217C124.221 88.0976 127.577 89.4904 131.077 89.4944Z'
              fill='#F560B9'
              stroke='#1D1D1B'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M131.077 83.4748C132.982 83.4748 134.808 82.7188 136.156 81.3728C137.503 80.0268 138.261 78.2009 138.263 76.2964C138.263 75.9572 138.128 75.6319 137.888 75.392C137.648 75.1521 137.323 75.0173 136.984 75.0173C136.645 75.0173 136.319 75.1521 136.079 75.392C135.839 75.6319 135.705 75.9572 135.705 76.2964C135.705 77.5237 135.217 78.7008 134.349 79.5686C133.481 80.4365 132.304 80.924 131.077 80.924C129.85 80.924 128.673 80.4365 127.805 79.5686C126.937 78.7008 126.45 77.5237 126.45 76.2964C126.463 76.1207 126.44 75.9441 126.382 75.7777C126.324 75.6112 126.232 75.4586 126.113 75.3292C125.993 75.1999 125.848 75.0968 125.686 75.0262C125.525 74.9557 125.35 74.9193 125.174 74.9193C124.998 74.9193 124.824 74.9557 124.662 75.0262C124.501 75.0968 124.355 75.1999 124.236 75.3292C124.116 75.4586 124.024 75.6112 123.966 75.7777C123.908 75.9441 123.885 76.1207 123.899 76.2964C123.901 78.1996 124.658 80.0244 126.003 81.3701C127.349 82.7159 129.174 83.4728 131.077 83.4748Z'
              fill='#1D1D1B'
            />
          </g>
        )}
        {/* hat */}
        <g>
          <path
            d='M104.373 8.16254H86.0735C83.0661 8.16254 80.1819 9.35722 78.0554 11.4838C75.9289 13.6103 74.7342 16.4945 74.7342 19.5019H115.705C115.705 16.4958 114.511 13.6127 112.386 11.4864C110.261 9.36009 107.379 8.16453 104.373 8.16254Z'
            fill='#F5CB1C'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeMiterlimit='10'
          />
          <path
            d='M92.1757 19.5019C92.1757 19.5019 107.225 26.6049 120.836 25.6117C134.448 24.6185 133.259 24.4003 147.014 24.942C147.014 24.942 136.578 19.5019 115.705 19.5019H92.1757Z'
            fill='#F5CB1C'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M95.2758 2C94.4596 2 93.6768 2.32424 93.0996 2.90138C92.5225 3.47852 92.1983 4.2613 92.1983 5.0775V8.16253H98.3533V5.0775C98.3533 4.67336 98.2737 4.27317 98.119 3.89979C97.9644 3.52641 97.7377 3.18715 97.4519 2.90138C97.1661 2.61561 96.8269 2.38892 96.4535 2.23426C96.0801 2.0796 95.6799 2 95.2758 2Z'
            fill='#F5CB1C'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeMiterlimit='10'
          />
        </g>
        {/* left wing */}
        <AnimatedGroup
          animation={leftWingAnimation}
          animationDuration={animationDuration}
          xOrigin={60}
          yOrigin={40}
        >
          <path
            d='M92.1758 102.858L77.315 115.612C76.2995 116.481 74.9807 116.912 73.6477 116.811C72.3147 116.709 71.0764 116.083 70.2044 115.07C69.7734 114.567 69.4457 113.984 69.2401 113.355C69.0344 112.725 68.9547 112.061 69.0058 111.401C69.0568 110.741 69.2374 110.097 69.5373 109.506C69.8372 108.916 70.2506 108.39 70.7537 107.959L71.6416 107.207C70.4134 107.693 69.0435 107.676 67.8273 107.161C66.6111 106.646 65.6462 105.673 65.1405 104.453C64.6341 103.233 64.6272 101.864 65.1213 100.639C65.6153 99.4148 66.5707 98.4335 67.7816 97.9067L66.6152 97.9895C65.9478 98.0528 65.2744 97.9822 64.6346 97.7821C63.9947 97.582 63.4012 97.2562 62.8887 96.8239C62.3763 96.3916 61.9552 95.8614 61.6501 95.2644C61.3451 94.6673 61.1622 94.0155 61.1122 93.3469C61.0621 92.6783 61.1459 92.0065 61.3587 91.3707C61.5714 90.7349 61.9089 90.148 62.3513 89.6442C62.7937 89.1404 63.3321 88.7299 63.935 88.4367C64.538 88.1435 65.1934 87.9736 65.8628 87.9368L85.4264 86.4319'
            fill='#54C4DB'
          />
          <path
            d='M92.1758 102.858L77.315 115.612C76.2995 116.481 74.9807 116.912 73.6477 116.811C72.3147 116.709 71.0764 116.083 70.2044 115.07V115.07C69.7734 114.567 69.4457 113.984 69.2401 113.355C69.0344 112.725 68.9547 112.061 69.0058 111.401C69.0568 110.741 69.2374 110.097 69.5373 109.506C69.8372 108.916 70.2506 108.39 70.7537 107.959L71.6416 107.207C70.4134 107.693 69.0435 107.676 67.8273 107.161C66.6111 106.646 65.6462 105.673 65.1405 104.453V104.453C64.6341 103.233 64.6272 101.864 65.1213 100.639C65.6153 99.4148 66.5707 98.4335 67.7816 97.9067L66.6152 97.9895C65.9478 98.0528 65.2744 97.9822 64.6346 97.7821C63.9947 97.582 63.4012 97.2562 62.8887 96.8239C62.3763 96.3916 61.9552 95.8614 61.6501 95.2644C61.3451 94.6673 61.1622 94.0155 61.1121 93.3469C61.0621 92.6783 61.1459 92.0065 61.3587 91.3707C61.5714 90.7349 61.9089 90.148 62.3513 89.6442C62.7937 89.1404 63.3321 88.7299 63.935 88.4367C64.538 88.1435 65.1934 87.9736 65.8628 87.9368L85.4264 86.4319'
            stroke='#1D1D1B'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </AnimatedGroup>
        {/* dots */}
        <g>
          <path
            d='M76.6831 47.1919C73.9362 47.1919 71.7094 44.9651 71.7094 42.2182C71.7094 39.4714 73.9362 37.2446 76.6831 37.2446C79.43 37.2446 81.6567 39.4714 81.6567 42.2182C81.6567 44.9651 79.43 47.1919 76.6831 47.1919Z'
            fill='white'
          />
          <path
            d='M53.1915 55.07C51.5833 55.07 50.2796 53.7663 50.2796 52.158C50.2796 50.5498 51.5833 49.2461 53.1915 49.2461C54.7998 49.2461 56.1035 50.5498 56.1035 52.158C56.1035 53.7663 54.7998 55.07 53.1915 55.07Z'
            fill='white'
          />
          <path
            d='M67.2399 75.8902C66.3713 75.8902 65.6673 75.1861 65.6673 74.3175C65.6673 73.449 66.3713 72.7449 67.2399 72.7449C68.1084 72.7449 68.8125 73.449 68.8125 74.3175C68.8125 75.1861 68.1084 75.8902 67.2399 75.8902Z'
            fill='white'
          />
          <path
            d='M47.8116 82.2032C45.6756 82.2032 43.9441 80.4716 43.9441 78.3356C43.9441 76.1996 45.6756 74.468 47.8116 74.468C49.9476 74.468 51.6792 76.1996 51.6792 78.3356C51.6792 80.4716 49.9476 82.2032 47.8116 82.2032Z'
            fill='white'
          />
        </g>
      </AnimatedGroup>
    </StyledParentSVG>
  );
};

export default Porcu;

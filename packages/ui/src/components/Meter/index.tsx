import React from 'react';

export interface MeterProps {
  type: 'heart' | 'lightning' | 'smiley';
  value: number;
}

const HeartMeter = ({ value }: { value: number }) => {
  return (
    <svg
      width='49'
      height='43'
      viewBox='0 0 49 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient
          id={`heart-half-fill-${value}`}
          x1='0'
          y1='1'
          x2='0'
          y2='0'
        >
          <stop offset={`${value}%`} stop-color='#F560B9' />
          <stop offset={`${value}%`} stop-color='white' stop-opacity='0' />
        </linearGradient>
      </defs>
      <path
        d='M26.2608 5.39209L24.3908 7.26208L22.5208 5.39209C21.4046 4.27585 20.0794 3.39048 18.621 2.78638C17.1625 2.18227 15.5994 1.87134 14.0208 1.87134C12.4422 1.87134 10.8791 2.18227 9.42065 2.78638C7.96222 3.39048 6.63705 4.27585 5.52081 5.39209C4.40458 6.50833 3.51914 7.83356 2.91504 9.29199C2.31094 10.7504 2 12.3135 2 13.8921C2 15.4707 2.31094 17.0339 2.91504 18.4923C3.51914 19.9507 4.40458 21.2759 5.52081 22.3921L7.39081 24.2621L24.3908 41.2621L41.3908 24.2621L43.2608 22.3921C45.5151 20.1377 46.7816 17.0802 46.7816 13.8921C46.7816 10.704 45.5151 7.64643 43.2608 5.39209C41.0065 3.13775 37.9489 1.87134 34.7608 1.87134C31.5727 1.87134 28.5151 3.13775 26.2608 5.39209Z'
        fill={`url(#heart-half-fill-${value})`}
        stroke='#1D1D1B'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

const Meter: React.FC<MeterProps> = ({ type, value }) => {
  if (type == 'heart') return <HeartMeter value={value} />;
  else return null;
};

export default Meter;

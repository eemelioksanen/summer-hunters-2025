import React from 'react';

export interface IMeterProps extends React.SVGProps<SVGSVGElement> {
  type: 'heart' | 'lightning' | 'happiness' | 'cutlery';
  percentage: number;
}

interface MeterProps extends React.SVGProps<SVGSVGElement> {
  percentage: number;
}

const HeartMeter: React.FC<MeterProps> = ({ percentage, ...restProps }) => (
  <svg
    width='45'
    viewBox='0 0 49 43'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...restProps}
  >
    <defs>
      <linearGradient
        id={`heart-partial-fill-${percentage}`}
        x1='0'
        y1='1'
        x2='0'
        y2='0'
      >
        <stop offset={`${percentage}%`} stopColor='#F560B9' />
        <stop offset={`${percentage}%`} stopColor='#f5d7e9' />
      </linearGradient>
    </defs>
    <path
      d='M26.2608 5.39209L24.3908 7.26208L22.5208 5.39209C21.4046 4.27585 20.0794 3.39048 18.621 2.78638C17.1625 2.18227 15.5994 1.87134 14.0208 1.87134C12.4422 1.87134 10.8791 2.18227 9.42065 2.78638C7.96222 3.39048 6.63705 4.27585 5.52081 5.39209C4.40458 6.50833 3.51914 7.83356 2.91504 9.29199C2.31094 10.7504 2 12.3135 2 13.8921C2 15.4707 2.31094 17.0339 2.91504 18.4923C3.51914 19.9507 4.40458 21.2759 5.52081 22.3921L7.39081 24.2621L24.3908 41.2621L41.3908 24.2621L43.2608 22.3921C45.5151 20.1377 46.7816 17.0802 46.7816 13.8921C46.7816 10.704 45.5151 7.64643 43.2608 5.39209C41.0065 3.13775 37.9489 1.87134 34.7608 1.87134C31.5727 1.87134 28.5151 3.13775 26.2608 5.39209Z'
      fill={`url(#heart-partial-fill-${percentage})`}
      stroke='#1D1D1B'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const LightningMeter: React.FC<MeterProps> = ({ percentage, ...restProps }) => (
  <svg
    height='57'
    viewBox='2 -1 20 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...restProps}
  >
    <defs>
      <linearGradient
        id={`lightning-partial-fill-${percentage}`}
        x1='0'
        y1='1'
        x2='0'
        y2='0'
      >
        <stop offset={`${percentage}%`} stopColor='#fcba35' />
        <stop offset={`${percentage}%`} stopColor='#fcf2de' />
      </linearGradient>
    </defs>
    <path
      fill={`url(#lightning-partial-fill-${percentage})`}
      d='M13 2L3 14H11L9 22L21 10H13L15 2Z'
      stroke='#1D1D1B'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const CutleryMeter: React.FC<MeterProps> = ({ percentage, ...restProps }) => (
  <svg
    width='38'
    viewBox='0 0 47 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...restProps}
  >
    <defs>
      <linearGradient
        id={`cutlery-partial-fill-${percentage}`}
        x1='0'
        y1='1'
        x2='0'
        y2='0'
      >
        <stop offset={`${percentage}%`} stopColor='#73e3fa' />
        <stop offset={`${percentage}%`} stopColor='#ebf7fa' />
      </linearGradient>
    </defs>
    <path
      d='M20.7318 1.87674C19.953 1.94744 19.23 2.31076 18.7085 2.89347C18.187 3.47617 17.9059 4.23495 17.9218 5.01676V13.0168H15.9218V5.01676C15.94 4.23431 15.6597 3.47425 15.1378 2.89102C14.6158 2.3078 13.8914 1.94514 13.1118 1.87674C12.707 1.85919 12.3029 1.9238 11.9238 2.06668C11.5447 2.20957 11.1984 2.4277 10.9059 2.70804C10.6134 2.98839 10.3807 3.32507 10.2219 3.69779C10.063 4.07051 9.98137 4.4716 9.98175 4.87674V13.0467H7.98175V5.04666C7.99761 4.26485 7.71648 3.5062 7.19501 2.9235C6.67354 2.34079 5.95052 1.97735 5.17175 1.90665C4.76617 1.8877 4.36095 1.95128 3.98065 2.09354C3.60036 2.2358 3.25293 2.4538 2.95935 2.73429C2.66578 3.01477 2.43215 3.35196 2.27271 3.72538C2.11326 4.09879 2.0313 4.50062 2.03174 4.90665V17.9767C2.03174 18.4398 2.12314 18.8984 2.30066 19.3261C2.47818 19.7538 2.73836 20.1423 3.06629 20.4693C3.39421 20.7963 3.78339 21.0553 4.21161 21.2316C4.63983 21.4079 5.09868 21.4981 5.56177 21.4967H7.85175V45.0867C7.83199 46.3856 8.29265 47.646 9.14533 48.626C9.998 49.606 11.1826 50.2367 12.4717 50.3968C13.1827 50.4681 13.9008 50.3895 14.5795 50.166C15.2582 49.9426 15.8824 49.5794 16.4121 49.0998C16.9417 48.6201 17.3648 48.0346 17.6541 47.3813C17.9434 46.7279 18.0925 46.0212 18.0917 45.3067V21.4667H20.3818C20.8449 21.468 21.3037 21.378 21.7319 21.2017C22.1601 21.0254 22.5493 20.7662 22.8773 20.4392C23.2052 20.1122 23.4654 19.7238 23.6429 19.2961C23.8204 18.8683 23.9117 18.4098 23.9117 17.9467V4.87674C23.9125 4.46716 23.8294 4.06169 23.6675 3.68546C23.5056 3.30923 23.2683 2.97018 22.9704 2.68912C22.6725 2.40806 22.3202 2.19102 21.9352 2.0513C21.5502 1.91158 21.1406 1.85217 20.7318 1.87674Z'
      fill={`url(#cutlery-partial-fill-${percentage})`}
      stroke='#1D1D1B'
      strokeWidth='3'
      strokeMiterlimit='10'
    />
    <path
      d='M42.7315 1.87671C41.1136 1.89888 39.5159 2.23956 38.0296 2.87927C36.5434 3.51898 35.1977 4.44515 34.0694 5.60498C32.9412 6.76482 32.0524 8.13557 31.4539 9.63892C30.8555 11.1423 30.559 12.7488 30.5815 14.3667V27.8367C30.5735 28.506 30.831 29.1512 31.2977 29.631C31.7644 30.1108 32.4022 30.3862 33.0715 30.3967H35.0016V45.4567C35.0016 46.0883 35.1259 46.7138 35.3676 47.2974C35.6094 47.8809 35.9637 48.4113 36.4104 48.8579C36.857 49.3046 37.3872 49.6588 37.9708 49.9005C38.5544 50.1422 39.1798 50.2667 39.8115 50.2667C40.4432 50.2667 41.0686 50.1422 41.6522 49.9005C42.2358 49.6588 42.7661 49.3046 43.2127 48.8579C43.6594 48.4113 44.0136 47.8809 44.2553 47.2974C44.4971 46.7138 44.6216 46.0883 44.6216 45.4567V3.80664C44.6242 3.55581 44.5774 3.30696 44.4839 3.07422C44.3903 2.84148 44.2518 2.62942 44.0763 2.4502C43.9008 2.27098 43.6916 2.12807 43.4609 2.02966C43.2302 1.93125 42.9824 1.87932 42.7315 1.87671Z'
      fill={`url(#cutlery-partial-fill-${percentage})`}
      stroke='#1D1D1B'
      strokeWidth='3'
      strokeMiterlimit='10'
    />
  </svg>
);

const HappinessMeter: React.FC<MeterProps> = ({ percentage, ...restProps }) => {
  const thresholds = [30, 70]; // value thresholds for sad / neutral / happy
  let color;
  let secondColor;
  if (percentage >= thresholds[1]) {
    color = '#03fc84';
    secondColor = '#cdfae4';
  } else if (percentage >= thresholds[0]) {
    color = '#fcd835';
    secondColor = '#fcfceb';
  } else {
    color = 'red';
    secondColor = '#ffb8b8';
  }
  return (
    <svg
      width='48'
      viewBox='6 0 88 100'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <defs>
        <linearGradient
          id={`happinesss-partial-fill-${percentage}`}
          x1='0'
          y1='1'
          x2='0'
          y2='0'
        >
          <stop offset={`${percentage}%`} stopColor={color} />
          <stop offset={`${percentage}%`} stopColor={secondColor} />
        </linearGradient>
      </defs>

      <circle
        cx='50'
        cy='50'
        r='40'
        stroke='black'
        strokeWidth='5'
        fill={`url(#happinesss-partial-fill-${percentage})`}
      />
      <circle cx='40' cy='40' r='5' fill='black' />
      <circle cx='60' cy='40' r='5' fill='black' />
      {percentage >= thresholds[1] && (
        <path
          d='M35 60 Q50 80, 65 60'
          stroke='black'
          strokeWidth='3'
          fill='none'
        />
      )}
      {percentage < thresholds[1] && percentage >= thresholds[0] && (
        <line x1='35' y1='65' x2='65' y2='65' stroke='black' strokeWidth='3' />
      )}
      {percentage < thresholds[0] && (
        <path
          d='M35 70 Q50 50, 65 70'
          stroke='black'
          strokeWidth='3'
          fill='none'
        />
      )}
    </svg>
  );
};

const Meter: React.FC<IMeterProps> = ({ type, percentage, ...restProps }) => {
  if (type == 'happiness')
    return <HappinessMeter {...restProps} percentage={percentage} />;
  else if (type == 'heart')
    return <HeartMeter {...restProps} percentage={percentage} />;
  else if (type == 'lightning')
    return <LightningMeter {...restProps} percentage={percentage} />;
  else if (type == 'cutlery')
    return <CutleryMeter {...restProps} percentage={percentage} />;
  else return null;
};

export default Meter;

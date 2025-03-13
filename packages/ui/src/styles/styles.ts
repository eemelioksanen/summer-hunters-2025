import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: 'Poppins';
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  // BabyPorcu animations
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  @keyframes babyPorcuBounceTail {
    0% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(20deg);
    }
  }

  // Porcu animations
  @keyframes porcuBodyAnimation {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5%);
    }
  }

  @keyframes porcuRightWingAnimation {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(25deg);
    }
  }

  @keyframes porcuLeftWingAnimation {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-25deg);
    }
  }

  @keyframes porcuTailAnimation {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
  }

`;

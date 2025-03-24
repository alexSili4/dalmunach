import { keyframes } from '@emotion/react';

const barrelLidRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const animations = {
  barrelLidRotate,
};

export default animations;

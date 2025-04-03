import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 51px;
  border: 1px solid #3b3a39;
  border-radius: 4.5px;
  background-color: rgba(248, 234, 203, 0.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 45px;
    height: 68px;
    border-radius: 6px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 60px;
    height: 90px;
    border-radius: 8px;
  }
`;

export const NumberBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    ${({ theme }) => theme.colors.white} 100%
  );
  overflow: hidden;
`;

export const Number = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 32px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 64px;
  }
`;

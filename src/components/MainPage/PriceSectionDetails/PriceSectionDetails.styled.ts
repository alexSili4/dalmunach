import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.div)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(12)}px;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(13)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.3em;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    max-width: 343px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const Price = styled.p`
  color: #48443a;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 54px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 72px;
  }
`;

export const Currency = styled.p`
  color: #48443a;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 32px;
  }
`;

export const BottleImg = styled.img`
  position: relative;
  width: 240px;
  transform: translateX(15%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 400px;
  }
`;

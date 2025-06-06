import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/symbols/section-bg-mob-min.png';
import sectionBgTablet from '@/images/main/symbols/section-bg-tablet-min.png';
import sectionBgDesk from '@/images/main/symbols/section-bg-desk-min.png';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(73)}px;
  padding-bottom: ${({ theme }) => theme.spacing(63)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(148)}px;
    padding-bottom: ${({ theme }) => theme.spacing(28)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(181)}px;
    padding-bottom: ${({ theme }) => theme.spacing(77)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(170)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(220)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 372px;
    margin-left: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 440px;
  }
`;

export const PlusesImg = styled.img`
  position: absolute;
  top: 356px;
  right: -120px;
  width: 207px;
  height: 825px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 490px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 587px;
    width: 276px;
    height: 1100px;
  }
`;

import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/symbols/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/symbols/section-bg-tablet-min.png';
import sectionBgDesk from '@/images/main/symbols/section-bg-desk-min.png';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(23)}px;
  padding-bottom: ${({ theme }) => theme.spacing(183)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(98)}px;
    padding-bottom: ${({ theme }) => theme.spacing(148)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(131)}px;
    padding-bottom: ${({ theme }) => theme.spacing(197)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
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
  top: 156px;
  right: -120px;
  width: 207px;
  height: 825px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 290px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 387px;
    width: 276px;
    height: 1100px;
  }
`;

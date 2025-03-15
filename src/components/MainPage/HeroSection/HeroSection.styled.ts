import styled from '@emotion/styled';
import sectionBgMob from '@/images/hero/section-bg-mob.jpg';
import sectionBgTablet from '@/images/hero/section-bg-tablet.jpg';
import sectionBgDesk from '@/images/hero/section-bg-desk.jpg';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(52)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgTablet});
    padding-top: ${({ theme }) => theme.spacing(54)}px;
    padding-bottom: ${({ theme }) => theme.spacing(147)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
    padding-top: ${({ theme }) => theme.spacing(72)}px;
    padding-bottom: ${({ theme }) => theme.spacing(195)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 0px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Title = styled.h1`
  width: 205px;
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 48px;
  font-weight: 700;
  line-height: 0.8;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 486px;
    font-size: 114px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 647px;
    font-size: 152px;
  }
`;

export const Subtitle = styled.h2`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 176px;
  left: 50%;
  width: calc(100% + 63px + 63px);
  aspect-ratio: 1 / 1;
  background-color: #004c43;
  border-radius: 50%;
  transform: translateX(-50%);
  opacity: 0.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 202px;
    width: 583px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 269px;
    width: 777;
  }
`;

import styled from '@emotion/styled';
import sectionBgMob from '@/images/distillery/section-bg-mob.jpg';
import sectionBgTablet from '@/images/distillery/section-bg-tablet.jpg';
import sectionBgDesk from '@/images/distillery/section-bg-desk.jpg';

export const Section = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(120)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(60)}px;
    padding-bottom: ${({ theme }) => theme.spacing(194)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(79)}px;
    padding-bottom: ${({ theme }) => theme.spacing(261)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(43)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 543px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 724px;
  }
`;

export const Title = styled.h2`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 45px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 60px;
  }
`;

export const Text = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const BottleImg = styled.img`
  position: absolute;
  top: 192px;
  left: 16px;
  width: 44px;
  height: 122px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 323px;
    left: auto;
    right: 601px;
    width: 79px;
    height: 174px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 430px;
    right: 801px;
    width: 106px;
    height: 232px;
  }
`;

export const YeyImg = styled.img`
  position: absolute;
  top: 192px;
  right: 14px;
  width: 302px;
  height: 114px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 398px;
    right: 181px;
    width: 417px;
    height: 158px;
    transform: rotate(15deg);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 531px;
    right: 241px;
    width: 556px;
    height: 210px;
  }
`;

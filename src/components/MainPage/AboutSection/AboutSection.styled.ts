import styled from '@emotion/styled';
import sectionBgMob from '@/images/about/section-bg-mob.jpg';
import sectionBgTablet from '@/images/about/section-bg-tablet.jpg';
import sectionBgDesk from '@/images/about/section-bg-desk.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(80)}px;
  padding-bottom: ${({ theme }) => theme.spacing(29)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(0)}px;
    padding-bottom: ${({ theme }) => theme.spacing(72)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(96)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 330px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 440px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(9)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 79px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 79px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 106px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const DrinkSetterImg = styled.img`
  width: 88px;
  height: 28px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 118px;
    height: 37px;
  }
`;

export const ScyfionImg = styled.img`
  width: 89px;
  height: 23px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 119px;
    height: 30px;
  }
`;

export const DalmunachImg = styled.img`
  width: 100%;
  height: 37px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 38px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 50px;
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

export const BirdWrap = styled.div`
  position: absolute;
  top: 84px;
  left: calc(50% - 107px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -38px;
    left: calc(50% + 94px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -51px;
    left: calc(50% + 125px);
  }
`;

export const BirdBgMobImg = styled.img`
  width: 213px;
  height: 212px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const BirdBgDeskImg = styled.img`
  width: 618px;
  height: 615px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 824px;
    height: 821px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const BirdMobImg = styled.img`
  position: absolute;
  top: 50px;
  left: 18px;
  width: 158px;
  height: 113px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const BirdDeskImg = styled.img`
  position: absolute;
  top: 87px;
  left: 135px;
  width: 290px;
  height: 239px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 117px;
    left: 180px;
    width: 386px;
    height: 319px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

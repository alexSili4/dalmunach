import styled from '@emotion/styled';
import warningBgMob from '@/images/footer/warning-bg-mob.png';
import warningBgTablet from '@/images/footer/warning-bg-tablet.png';
import warningBgDesk from '@/images/footer/warning-bg-desk.png';
import warningTextMob from '@/images/footer/warning-text-mob.png';
import warningTextTablet from '@/images/footer/warning-text-tablet.png';
import warningTextDesk from '@/images/footer/warning-text-desk.png';
import footerBgMob from '@/images/footer/footer-bg-mob.jpg';
import footerBgTablet from '@/images/footer/footer-bg-tablet.jpg';
import footerBgDesk from '@/images/footer/footer-bg-desk.jpg';

export const StyledFooter = styled.footer`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(44)}px;
  background-image: url(${footerBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(15)}px;
    padding-bottom: ${({ theme }) => theme.spacing(72)}px;
    background-image: url(${footerBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(96)}px;
    background-image: url(${footerBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(14)}px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const LogoImg = styled.img`
  width: 299px;
  height: 72px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 374px;
    height: 90px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 498px;
    height: 120px;
  }
`;

export const OtherIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const DrinkSetterImg = styled.img`
  width: 80px;
  height: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100px;
    height: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 134px;
    height: 42px;
  }
`;

export const ScyfionImg = styled.img`
  width: 81px;
  height: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 101px;
    height: 26px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 135px;
    height: 34px;
  }
`;

export const DalmunachImg = styled.img`
  width: 300px;
  height: 34px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 375px;
    height: 43px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 500px;
    height: 57px;
  }
`;

export const Warning = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 129px;
  background-image: url(${warningTextMob}), url(${warningBgMob});
  background-size: 350px 79px, 100% 100%;
  background-position: top 46px left 50%, 0 0;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 249px;
    background-image: url(${warningTextTablet}), url(${warningBgTablet});
    background-size: 1080px 80px, 100% 100%;
    background-position: top 169px left 50%, 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 332px;
    background-image: url(${warningTextDesk}), url(${warningBgDesk});
    background-size: 1440px 107px, 100% 100%;
    background-position: top 225px left 50%, 0 0;
  }
`;

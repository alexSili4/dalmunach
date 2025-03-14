import styled from '@emotion/styled';
import warningBgMob from '@/images/footer/warning-bg-mob.png';
import warningBgTablet from '@/images/footer/warning-bg-tablet.png';
import warningBgDesk from '@/images/footer/warning-bg-desk.png';
import warningTextMob from '@/images/footer/warning-text-mob.png';
import warningTextTablet from '@/images/footer/warning-text-tablet.png';
import warningTextDesk from '@/images/footer/warning-text-desk.png';

export const StyledFooter = styled.footer`
  position: relative;
`;

export const Container = styled.div``;

export const Content = styled.div``;

export const IconsWrap = styled.div``;

export const Icons = styled.div``;

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

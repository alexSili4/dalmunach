import styled from '@emotion/styled';
import sectionBgMob from '@/images/warning/hero/section-bg-mob-min.jpg';
import sectionBgDesk from '@/images/warning/hero/section-bg-desk-min.jpg';

export const Section = styled.section`
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-items: center;
    width: 440px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(9)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const OtherIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const LogoImg = styled.img``;

export const DrinkSetterImg = styled.img`
  width: 88px;
  height: 28px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 118px;
    height: 37px;
  }
`;

export const ScyfionImg = styled.img`
  width: 89px;
  height: 23px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 119px;
    height: 30px;
  }
`;

export const DalmunachImg = styled.img``;

export const Title = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0%;
  }
`;

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 352px;
  }
`;

export const AcceptBtn = styled.button`
  display: flex;
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing()}px;
  border: 1px solid;
  border-color: #222222;
  border-radius: 100px;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const GoBackLink = styled.a`
  display: flex;
  border: 1px solid;
  border-color: #222222;
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacing()}px;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ControlTitleWrap = styled.span`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6)}px;
  border: 1px solid;
  border-color: #222222;
  border-radius: 100px;
  background-color: transparent;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc},
    background-color ${({ theme }) => theme.transitionDurationAndFunc};

  *:is(:hover, :focus) > & {
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ControlTitle = styled.span`
  width: 100%;
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }
`;

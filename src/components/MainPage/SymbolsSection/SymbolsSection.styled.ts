import styled from '@emotion/styled';
import sectionBgMob from '@/images/symbols/section-bg-mob.jpg';
import sectionBgTablet from '@/images/symbols/section-bg-tablet.png';
import sectionBgDesk from '@/images/symbols/section-bg-desk.png';

export const Section = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
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
    width: 330px;
    margin-left: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 440px;
  }
`;

export const Title = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 45px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
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

export const DiagramsImg = styled.img`
  position: absolute;
  top: 707px;
  right: 12px;
  width: 440px;
  height: 509px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 943px;
    left: 16px;
    width: 586px;
    height: 678px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
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

export const BookletImg = styled.img`
  position: absolute;
  top: 385px;
  left: 50%;
  width: 428px;
  max-width: 428px;
  height: 617px;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 280px;
    left: 118px;
    width: 571px;
    max-width: 100%;
    height: 824px;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 373px;
    left: 157px;
    width: 762px;
    height: 1099px;
  }
`;

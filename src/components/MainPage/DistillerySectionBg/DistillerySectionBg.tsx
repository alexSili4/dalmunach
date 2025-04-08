import { FC } from 'react';
import AnimatedDistillerySectionImages from '@AnimatedComponents/AnimatedDistillerySectionImages';
import house from '@/images/main/distillery/other-section-bg-house-min.png';
import otherSectionBgMob from '@/images/main/distillery/other-section-bg-mob-min.png';
import otherSectionBgTablet from '@/images/main/distillery/other-section-bg-tablet-min.png';
import otherSectionBgDesk from '@/images/main/distillery/other-section-bg-desk-min.png';
import barrelLid from '@/images/main/distillery/barrel-lid-min.png';
import {
  Content,
  SectionBgDesk,
  SectionBgMob,
  SectionBgTablet,
  BarrelLidImg,
  HouseImg,
  CutElement,
  CutImgDesk,
  CutImgTablet,
  CutImgMob,
  Container,
} from './DistillerySectionBg.styled';
import cutMob from '@/images/main/distillery/other-section-bg-cut-mob-min.png';
import cutTablet from '@/images/main/distillery/other-section-bg-cut-tablet-min.png';
import cutDesk from '@/images/main/distillery/other-section-bg-cut-desk-min.png';
import { useParallax } from '@/hooks';

const DistillerySectionBg: FC = () => {
  const { containerRef, translateY } = useParallax(70);

  return (
    <Container>
      <Content ref={containerRef}>
        <SectionBgMob src={otherSectionBgMob} alt='Фон' />
        <SectionBgTablet src={otherSectionBgTablet} alt='Фон' />
        <SectionBgDesk src={otherSectionBgDesk} alt='Фон' />
        <BarrelLidImg src={barrelLid} alt='Кришка бочки' />
        <AnimatedDistillerySectionImages />
        <CutElement>
          <CutImgMob src={cutMob} alt='Зріз' />
          <CutImgTablet src={cutTablet} alt='Зріз' />
          <CutImgDesk src={cutDesk} alt='Зріз' />
        </CutElement>
      </Content>
      <HouseImg
        src={house}
        alt='Будинок'
        style={{
          translateY,
          translateX: '-50%',
        }}
      />
    </Container>
  );
};

export default DistillerySectionBg;

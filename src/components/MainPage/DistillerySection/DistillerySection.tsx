import { useInView } from 'framer-motion';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Container,
  Section,
  BottleImg,
  YeyPicture,
  SectionBgWrap,
  SectionBgMob,
  SectionBgTablet,
  SectionBgDesk,
  BarrelLidImg,
  CutImgMob,
  CutImgTablet,
  CutImgDesk,
} from './DistillerySection.styled';
import bottle from '@/images/main/distillery/bottle-min.png';
import yeyMob from '@/images/main/distillery/yey-mob-min.png';
import yeyDesk from '@/images/main/distillery/yey-desk-min.png';
import otherSectionBgMob from '@/images/main/distillery/other-section-bg-mob-min.png';
import otherSectionBgTablet from '@/images/main/distillery/other-section-bg-tablet-min.png';
import otherSectionBgDesk from '@/images/main/distillery/other-section-bg-desk-min.png';
import barrelLid from '@/images/main/distillery/barrel-lid-min.png';
import { theme } from '@/constants';
import AnimatedDistillerySectionTitle from '@AnimatedComponents/AnimatedDistillerySectionTitle';
import AnimatedDistillerySectionText from '@AnimatedComponents/AnimatedDistillerySectionText';
import AnimatedDistillerySectionImages from '@AnimatedComponents/AnimatedDistillerySectionImages';
import cutMob from '@/images/main/distillery/other-section-bg-cut-mob-min.png';
import cutTablet from '@/images/main/distillery/other-section-bg-cut-tablet-min.png';
import cutDesk from '@/images/main/distillery/other-section-bg-cut-desk-min.png';

const DistillerySection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const yeyPictureMedia = `(min-width: ${theme.breakpoints.tablet}px)`;

  return (
    <Section ref={sectionRef}>
      <SectionBgWrap>
        <SectionBgMob src={otherSectionBgMob} alt='Фон' />
        <SectionBgTablet src={otherSectionBgTablet} alt='Фон' />
        <SectionBgDesk src={otherSectionBgDesk} alt='Фон' />
        <BarrelLidImg src={barrelLid} alt='Кришка бочки' />
        <AnimatedDistillerySectionImages />
        <CutImgMob src={cutMob} alt='Зріз' />
        <CutImgTablet src={cutTablet} alt='Зріз' />
        <CutImgDesk src={cutDesk} alt='Зріз' />
      </SectionBgWrap>
      <BottleImg src={bottle} alt='Пляшка' />
      <YeyPicture>
        <source srcSet={yeyDesk} media={yeyPictureMedia} />
        <img src={yeyMob} alt='Око' />
      </YeyPicture>
      <GeneralContainer>
        <Container>
          <AnimatedDistillerySectionTitle
            strings={['Про', 'дістелерію']}
            inView={inView}
          />
          <AnimatedDistillerySectionText
            title='Дані про дистилерію:'
            region='Регіон: Спейсайд'
            owner='Власник: Chivas Brothers (Pernod Ricard)'
            location='Побудована на місці славнозвісної дистилерії Imperial, Dalmunach розпочала винокуріння в 2015 році.'
            subtitle='Технічне оснащення:'
            equipment={[
              ' ∙ 13-тонний заторний чан',
              ' ∙ 16 ферментаційних чанів із нержавіючої сталі на 56 000 л',
              ' ∙ 4 бражних перегонних куби об’ємом 28 000 л кожен',
              ' ∙ 4 спиртових перегонних куби об’ємом 18 000 л кожен',
            ]}
            history='Перший офіційний реліз Dalmunach — односолодове 4-річне віскі бочкової міцності (59%) — вийшов восени 2019 року.'
            inView={inView}
          />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default DistillerySection;

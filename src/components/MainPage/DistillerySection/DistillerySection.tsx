import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Container,
  Section,
  Text,
  Title,
  BottleImg,
  YeyPicture,
  SectionBgWrap,
  SectionBgMob,
  SectionBgTablet,
  SectionBgDesk,
  BarrelLidImg,
} from './DistillerySection.styled';
import bottle from '@/images/main/distillery/bottle-min.png';
import yeyMob from '@/images/main/distillery/yey-mob-min.png';
import yeyDesk from '@/images/main/distillery/yey-desk-min.png';
import otherSectionBgMob from '@/images/main/distillery/other-section-bg-mob-min.png';
import otherSectionBgTablet from '@/images/main/distillery/other-section-bg-tablet-min.png';
import otherSectionBgDesk from '@/images/main/distillery/other-section-bg-desk-min.png';
import barrelLid from '@/images/main/distillery/barrel-lid-min.png';
import { theme } from '@/constants';

const DistillerySection: FC = () => {
  const yeyPictureMedia = `(min-width: ${theme.breakpoints.tablet}px)`;

  return (
    <Section>
      <SectionBgWrap>
        <SectionBgMob src={otherSectionBgMob} alt='Фон' />
        <SectionBgTablet src={otherSectionBgTablet} alt='Фон' />
        <SectionBgDesk src={otherSectionBgDesk} alt='Фон' />
        <BarrelLidImg src={barrelLid} alt='Кришка бочки' />
      </SectionBgWrap>
      <BottleImg src={bottle} alt='Пляшка' />
      <YeyPicture>
        <source srcSet={yeyDesk} media={yeyPictureMedia} />
        <img src={yeyMob} alt='Око' />
      </YeyPicture>
      <GeneralContainer>
        <Container>
          <Title>
            Про
            <br />
            дістелерію
          </Title>
          <Text>
            Дані про дистилерію: Регіон: Спейсайд
            <br />
            Власник: Chivas Brothers (Pernod Ricard)
            <br />
            Побудована на місці славнозвісної дистилерії Imperial, Dalmunach
            розпочала винокуріння в 2015 році.
            <br />
            <br />
            Технічне оснащення:
            <br /> ∙ 13-тонний заторний чан
            <br /> ∙ 16 ферментаційних чанів із нержавіючої сталі на 56 000 л
            <br /> ∙ 4 бражних перегонних куби об’ємом 28 000 л кожен
            <br /> ∙ 4 спиртових перегонних куби об’ємом 18 000 л кожен
            <br />
            <br />
            Перший офіційний реліз Dalmunach — односолодове 4-річне віскі
            бочкової міцності (59%) — вийшов восени 2019 року.
          </Text>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default DistillerySection;

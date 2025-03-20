import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import logo from '@/images/main/about/logo.png';
import dalmunach from '@/images/main/about/dalmunach.png';
import drinkSetter from '@/images/main/about/drink-setter.png';
import scyfion from '@/images/main/about/scyfion.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Container,
  Section,
  Content,
  DalmunachImg,
  DrinkSetterImg,
  Logo,
  LogoImg,
  LogoWrap,
  ScyfionImg,
  Text,
  BirdWrap,
  BirdBgDeskImg,
  BirdBgMobImg,
  BirdDeskImg,
  BirdMobImg,
} from './AboutSection.styled';
import birdMob from '@/images/about/bird-mob.png';
import birdDesk from '@/images/about/bird-desk.png';
import birdBgMob from '@/images/about/bird-bg-mob.png';
import birdBgDesk from '@/images/about/bird-bg-desk.png';

const AboutSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Про винокурні Шотландії' />
      <GeneralContainer>
        <Container>
          <Content>
            <LogoWrap>
              <LogoImg src={logo} alt='Лого лікеро-горілчаних заводів' />
              <Logo>
                <DrinkSetterImg src={drinkSetter} alt='Лого Drink Setter' />
                <ScyfionImg src={scyfion} alt='Лого Scyfion' />
              </Logo>
            </LogoWrap>
            <DalmunachImg src={dalmunach} alt='Лого Dalmunach' />
          </Content>
          <Text>
            Від почину віку спливло вже чверть століття. За цей час у Шотландії
            розпочали роботу понад 30 нових солодових винокурень. Чимала частина
            з них вже може похвалитися власними віскі з витримкою, яка досягає
            двозначних чисел у роках.
          </Text>
        </Container>
      </GeneralContainer>
      <BirdWrap>
        <BirdMobImg src={birdMob} alt='Птах' />
        <BirdDeskImg src={birdDesk} alt='Птах' />
        <BirdBgMobImg src={birdBgMob} alt='Фон' />
        <BirdBgDeskImg src={birdBgDesk} alt='Фон' />
      </BirdWrap>
    </Section>
  );
};

export default AboutSection;

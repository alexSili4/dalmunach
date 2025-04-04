import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import logo from '@/images/main/about/logo-min.png';
import dalmunach from '@/images/main/about/dalmunach-min.png';
import drinkSetter from '@/images/main/about/drink-setter-min.png';
import scyfion from '@/images/main/about/scyfion-min.png';
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
  BirdWrap,
  BirdBgDeskImg,
  BirdBgMobImg,
  BirdDeskImg,
  BirdMobImg,
} from './AboutSection.styled';
import birdMob from '@/images/main/about/bird-mob-min.png';
import birdDesk from '@/images/main/about/bird-desk-min.png';
import birdBgMob from '@/images/main/about/bird-bg-mob-min.png';
import birdBgDesk from '@/images/main/about/bird-bg-desk-min.png';
import AnimatedAboutSectionText from '@AnimatedComponents/AnimatedAboutSectionText';
import { IProps } from './AboutSection.types';

const AboutSection: FC<IProps> = ({ inView, sectionRef }) => {
  return (
    <Section ref={sectionRef}>
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
          <AnimatedAboutSectionText
            text='Від почину віку спливло вже чверть століття. За цей час у Шотландії розпочали роботу понад 30 нових солодових винокурень. Чимала частина з них вже може похвалитися власними віскі з витримкою, яка досягає двозначних чисел у роках.'
            inView={inView}
          />
        </Container>
      </GeneralContainer>
      <BirdWrap>
        <BirdBgMobImg src={birdBgMob} alt='Фон' />
        <BirdBgDeskImg src={birdBgDesk} alt='Фон' />
        <BirdMobImg src={birdMob} alt='Птах' />
        <BirdDeskImg src={birdDesk} alt='Птах' />
      </BirdWrap>
    </Section>
  );
};

export default AboutSection;

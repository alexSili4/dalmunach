import { FC } from 'react';
import { IProps } from './HeroSection.types';
import {
  Section,
  Container,
  Background,
  DalmunachImg,
  DrinkSetterImg,
  Icons,
  IconsWrap,
  LogoImg,
  OtherIcons,
  ScyfionImg,
  TitleWrap,
  AcceptBtn,
  ControlsWrap,
  GoBackLink,
  Title,
  ControlTitle,
  ControlTitleWrap,
} from './HeroSection.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import logo from '@/images/warning/hero/logo.png';
import dalmunach from '@/images/warning/hero/dalmunach.png';
import drinkSetter from '@/images/warning/hero/drink-setter.png';
import scyfion from '@/images/warning/hero/scyfion.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const HeroSection: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  const onAcceptBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    updateIsLegalDrinkingAgeUser(true);
  };

  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <TitleWrap>
              <IconsWrap>
                <Icons>
                  <LogoImg src={logo} alt='Лого лікеро-горілчаних заводів' />
                  <OtherIcons>
                    <DrinkSetterImg src={drinkSetter} alt='Лого Drink Setter' />
                    <ScyfionImg src={scyfion} alt='Лого Scyfion' />
                  </OtherIcons>
                </Icons>
                <DalmunachImg src={dalmunach} alt='Лого Dalmunach' />
              </IconsWrap>
              <Title>
                Маєш бути повнолітнім, щоб відвідати цей стрьомний сайт
              </Title>
            </TitleWrap>
            <ControlsWrap>
              <AcceptBtn type='button' onClick={onAcceptBtnClick}>
                <ControlTitleWrap>
                  <ControlTitle>Я лишаюсь — мені є 18</ControlTitle>
                </ControlTitleWrap>
              </AcceptBtn>
              <GoBackLink href='https://www.google.com'>
                <ControlTitleWrap>
                  <ControlTitle>Я йду</ControlTitle>
                </ControlTitleWrap>
              </GoBackLink>
            </ControlsWrap>
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;

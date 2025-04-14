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
  BgImgPicture,
  BgImg,
  Link,
} from './HeroSection.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import logo from '@/images/warning/hero/logo-min.png';
import dalmunach from '@/images/warning/hero/dalmunach-min.png';
import drinkSetter from '@/images/warning/hero/drink-setter-min.png';
import scyfion from '@/images/warning/hero/scyfion-min.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import bgImgMob from '@/images/warning/hero/section-bg-mob-min.jpg';
import bgImgDesk from '@/images/warning/hero/section-bg-desk-min.jpg';
import { ExternalLinks, theme } from '@/constants';

const HeroSection: FC<IProps> = ({
  updateIsLegalDrinkingAgeUser,
  sectionRef,
}) => {
  const bgImgMedia = `(min-width: ${theme.breakpoints.tablet}px)`;

  const onAcceptBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    updateIsLegalDrinkingAgeUser(true);
  };

  return (
    <Section ref={sectionRef}>
      <GeneralContainer>
        <Background>
          <BgImgPicture>
            <source srcSet={bgImgDesk} media={bgImgMedia} />
            <BgImg src={bgImgMob} alt='Фонове зображення' />
          </BgImgPicture>
          <Container>
            <TitleWrap>
              <IconsWrap>
                <Icons>
                  <LogoImg src={logo} alt='Лого лікеро-горілчаних заводів' />
                  <OtherIcons>
                    <Link
                      href={ExternalLinks.drinksetter}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <DrinkSetterImg
                        src={drinkSetter}
                        alt='Лого Drink Setter'
                      />
                    </Link>
                    <Link
                      href={ExternalLinks.scyfion}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ScyfionImg src={scyfion} alt='Лого Scyfion' />
                    </Link>
                  </OtherIcons>
                </Icons>
                <DalmunachImg src={dalmunach} alt='Лого Dalmunach' />
              </IconsWrap>
              <Title>Ви маєте бути повнолітні для перегляду сайту</Title>
            </TitleWrap>
            <ControlsWrap>
              <AcceptBtn type='button' onClick={onAcceptBtnClick}>
                <ControlTitleWrap>
                  <ControlTitle>Я лишаюсь — мені є 18</ControlTitle>
                </ControlTitleWrap>
              </AcceptBtn>
              <GoBackLink href={ExternalLinks.drinksetter}>
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

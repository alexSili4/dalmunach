import { FC } from 'react';
import { IProps } from './HeroSection.types';
import { Section, Container } from './HeroSection.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const HeroSection: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  const onAcceptBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    updateIsLegalDrinkingAgeUser;
    true;
  };

  return (
    <Section>
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
          <Title>Маєш бути повнолітнім, щоб відвідати цей стрьомний сайт</Title>
        </TitleWrap>
        <ControlsWrap>
          <AcceptBtn type='button' onClick={onAcceptBtnClick}>
            Я лишаюсь — мені є 18
          </AcceptBtn>
          <GoBackLink href='https://www.google.com'></GoBackLink>
          <a></a>
        </ControlsWrap>
      </Container>
    </Section>
  );
};

export default HeroSection;

import { FC } from 'react';
import {
  Container,
  Content,
  StyledFooter,
  Warning,
  Icons,
  IconsWrap,
  OtherIcons,
  LogoImg,
  DrinkSetterImg,
  ScyfionImg,
  DalmunachImg,
} from './Footer.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import FooterLinks from '@GeneralComponents/FooterLinks';
import SocialLinksList from '@GeneralComponents/SocialLinksList';
import logo from '@/images/footer/logo-min.png';
import dalmunach from '@/images/footer/dalmunach-min.png';
import drinkSetter from '@/images/footer/drink-setter-min.png';
import scyfion from '@/images/footer/scyfion-min.png';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <GeneralContainer>
        <Container>
          <Content>
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
            <SocialLinksList isFooter />
          </Content>
          <FooterLinks />
        </Container>
      </GeneralContainer>
      <Warning></Warning>
    </StyledFooter>
  );
};

export default Footer;

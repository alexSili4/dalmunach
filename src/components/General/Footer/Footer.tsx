import { FC } from 'react';
import {
  Container,
  Content,
  StyledFooter,
  Warning,
  Icons,
  IconsWrap,
} from './Footer.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import FooterLinks from '@GeneralComponents/FooterLinks';
import SocialLinks from '@GeneralComponents/SocialLinks';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <GeneralContainer>
        <Container>
          <Content>
            <IconsWrap>
              <Icons>
                {/* DS */}
                {/* SCY */}
              </Icons>
              {/* Dal */}
            </IconsWrap>
            <SocialLinks isFooter />
          </Content>
          <FooterLinks />
        </Container>
      </GeneralContainer>
      <Warning></Warning>
    </StyledFooter>
  );
};

export default Footer;

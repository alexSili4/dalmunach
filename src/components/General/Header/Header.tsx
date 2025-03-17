import { FC } from 'react';
import { Container, StyledHeader, LogoWrap, Nav, Icons } from './Header.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import Dalmunach from '@/icons/header/dalmunach.svg?react';
import Scyfion from '@/icons/header/scyfion.svg?react';
import DinkSetter from '@/icons/header/dink-setter.svg?react';
import { ClassNames } from '@/constants';
import SocialLinksList from '@GeneralComponents/SocialLinksList';

const Header: FC = () => {
  return (
    <StyledHeader>
      <GeneralContainer>
        <Nav>
          <Container>
            <Icons>
              <LogoWrap>
                <DinkSetter className={ClassNames.dinkSetterHeaderIcon} />
                <Scyfion className={ClassNames.scyfionHeaderIcon} />
              </LogoWrap>
              <Dalmunach className={ClassNames.dalmunachHeaderIcon} />
            </Icons>
            <SocialLinksList />
          </Container>
        </Nav>
      </GeneralContainer>
    </StyledHeader>
  );
};

export default Header;

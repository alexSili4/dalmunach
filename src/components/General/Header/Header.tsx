import { FC } from 'react';
import { Container, StyledHeader, LogoWrap, Nav, Link } from './Header.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import Dalmunach from '@/icons/header/dalmunach.svg?react';
import Scyfion from '@/icons/header/scyfion.svg?react';
import DinkSetter from '@/icons/header/dink-setter.svg?react';
import { ClassNames, ExternalLinks } from '@/constants';
import SocialLinksList from '@GeneralComponents/SocialLinksList';

const Header: FC = () => {
  return (
    <StyledHeader>
      <GeneralContainer>
        <Nav>
          <Container>
            <LogoWrap>
              <Link
                href={ExternalLinks.drinksetter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <DinkSetter className={ClassNames.dinkSetterHeaderIcon} />
              </Link>
              <Link
                href={ExternalLinks.scyfion}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Scyfion className={ClassNames.scyfionHeaderIcon} />
              </Link>
            </LogoWrap>
            <Dalmunach className={ClassNames.dalmunachHeaderIcon} />
            <SocialLinksList />
          </Container>
        </Nav>
      </GeneralContainer>
    </StyledHeader>
  );
};

export default Header;

import { FC } from 'react';
import {
  List,
  Link,
  ListItem,
  Container,
  Title,
} from './SocialLinksList.styled';
import Facebook from '@/icons/header/facebook.svg?react';
import Instagram from '@/icons/header/instagram.svg?react';
import Dss from '@/icons/header/dss.svg?react';
import { ExternalLinks } from '@/constants';
import { IProps } from './SocialLinksList.types';

const SocialLinksList: FC<IProps> = ({ isFooter = false }) => {
  return (
    <Container>
      {isFooter && <Title>Приєднуйтесь до нас прямо зараз</Title>}
      <List isFooter={isFooter}>
        <ListItem>
          <Link
            href={ExternalLinks.facebook}
            target='_blank'
            rel='noopener noreferrer'
            isFooter={isFooter}
          >
            <Facebook />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={ExternalLinks.instagram}
            target='_blank'
            rel='noopener noreferrer'
            isFooter={isFooter}
          >
            <Instagram />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={ExternalLinks.dss}
            target='_blank'
            rel='noopener noreferrer'
            isFooter={isFooter}
          >
            <Dss />
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default SocialLinksList;

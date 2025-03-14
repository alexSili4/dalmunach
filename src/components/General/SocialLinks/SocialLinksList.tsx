import { FC } from 'react';
import { List, Link, ListItem } from './SocialLinks.styled';
import Facebook from '@/icons/header/facebook.svg?react';
import Instagram from '@/icons/header/instagram.svg?react';
import Dss from '@/icons/header/dss.svg?react';
import { SocialLinks } from '@/constants';
import { IProps } from './SocialLinks.types';

const SocialLinksList: FC<IProps> = ({ isFooter = false }) => {
  return (
    <List>
      <ListItem>
        <Link
          href={SocialLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
          isFooter={isFooter}
        >
          <Facebook />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href={SocialLinks.instagram}
          target='_blank'
          rel='noopener noreferrer'
          isFooter={isFooter}
        >
          <Instagram />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href={SocialLinks.dss}
          target='_blank'
          rel='noopener noreferrer'
          isFooter={isFooter}
        >
          <Dss />
        </Link>
      </ListItem>
    </List>
  );
};

export default SocialLinksList;

import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import {
  Container,
  Link,
  List,
  ListItem,
  Content,
  Warning,
} from './FooterLinks.styled';

const FooterLinks: FC = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Link
              href={ExternalLinks.privacy}
              target='_blank'
              rel='noopener noreferrer'
            >
              Конфіденційність
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={ExternalLinks.conditionsTerms}
              target='_blank'
              rel='noopener noreferrer'
            >
              Умови використання
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={ExternalLinks.offer}
              target='_blank'
              rel='noopener noreferrer'
            >
              Оферта
            </Link>
          </ListItem>
        </List>
        <Warning>
          Сайт може містити контент не призначений для осіб молодше 16 років.
        </Warning>
      </Content>
      <Link href={ExternalLinks.sun} target='_blank' rel='noopener noreferrer'>
        Діджиталізовано Сонцем ☼
      </Link>
    </Container>
  );
};

export default FooterLinks;

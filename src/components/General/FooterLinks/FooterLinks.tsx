import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import { Container, Link,  Warning } from './FooterLinks.styled';

const FooterLinks: FC = () => {
  return (
    <Container>
      <Warning>
        Сайт може містити контент, не призначений для осіб молодше 18 років.
      </Warning>
      <Link href={ExternalLinks.sun} target='_blank' rel='noopener noreferrer'>
        Діджиталізовано Сонцем ☼
      </Link>
    </Container>
  );
};

export default FooterLinks;

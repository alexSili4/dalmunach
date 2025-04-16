import { FC } from 'react';
import { Link, LinkTitle, LinkTitleWrap } from './ReservedLink.styled';
import { SectionsIds } from '@/constants';

const ReservedLink: FC = () => {
  const reservedLink = `#${SectionsIds.preOrder}`;

  return (
    <Link href={reservedLink}>
      <LinkTitleWrap>
        <LinkTitle>ПЕРЕДЗАМОВИТИ</LinkTitle>
      </LinkTitleWrap>
    </Link>
  );
};

export default ReservedLink;

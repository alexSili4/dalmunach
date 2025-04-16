import { FC } from 'react';
import { Link, LinkTitle, LinkTitleWrap } from './ReservedLink.styled';
import { SectionsIds } from '@/constants';
import { IProps } from './ReservedLink.types';

const ReservedLink: FC<IProps> = ({ isHiddenOnDesk = false }) => {
  const reservedLink = `#${SectionsIds.preOrder}`;

  return (
    <Link href={reservedLink} isHiddenOnDesk={isHiddenOnDesk}>
      <LinkTitleWrap>
        <LinkTitle>ПЕРЕДЗАМОВИТИ</LinkTitle>
      </LinkTitleWrap>
    </Link>
  );
};

export default ReservedLink;

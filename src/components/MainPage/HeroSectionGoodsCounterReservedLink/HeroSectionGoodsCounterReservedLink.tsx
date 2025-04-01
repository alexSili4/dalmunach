import { FC } from 'react';
import {
  ReservedLink,
  ReservedLinkTitle,
  ReservedLinkTitleWrap,
} from './HeroSectionGoodsCounterReservedLink.styled';
import { IProps } from './HeroSectionGoodsCounterReservedLink.types';

const HeroSectionGoodsCounterReservedLink: FC<IProps> = ({ reservedLink }) => {
  return (
    <ReservedLink href={reservedLink}>
      <ReservedLinkTitleWrap>
        <ReservedLinkTitle>ПЕРЕДЗАМОВИТИ</ReservedLinkTitle>
      </ReservedLinkTitleWrap>
    </ReservedLink>
  );
};

export default HeroSectionGoodsCounterReservedLink;

import { FC } from 'react';
import { Container } from './HeroSectionGoodsCounter.styled';
import { SectionsIds } from '@/constants';
import { useAppStore } from '@/store/store';
import { selectMaxBottles, selectOrdersCount } from '@/store/app/selectors';
import HeroSectionGoodsCounterReservedLink from '@MainPageComponents/HeroSectionGoodsCounterReservedLink';
import HeroSectionGoodsCounterTotal from '@MainPageComponents/HeroSectionGoodsCounterTotal';
import { getCounterNumbers } from '@/utils';

const HeroSectionGoodsCounter: FC = () => {
  const ordersCount = useAppStore(selectOrdersCount);
  const maxBottles = useAppStore(selectMaxBottles);

  const reservedLink = `#${SectionsIds.preOrder}`;
  const counterNumbers = getCounterNumbers({ maxBottles, ordersCount });

  return (
    <Container>
      <HeroSectionGoodsCounterTotal numbers={counterNumbers} />
      <HeroSectionGoodsCounterReservedLink reservedLink={reservedLink} />
    </Container>
  );
};

export default HeroSectionGoodsCounter;

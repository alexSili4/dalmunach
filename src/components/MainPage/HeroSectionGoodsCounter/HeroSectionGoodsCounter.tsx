import { FC } from 'react';
import { Container } from './HeroSectionGoodsCounter.styled';
import { SectionsIds } from '@/constants';
import { useAppStore } from '@/store/store';
import { selectMaxBottles, selectOrdersCount } from '@/store/app/selectors';
import HeroSectionGoodsCounterReservedLink from '@MainPageComponents/HeroSectionGoodsCounterReservedLink';
import HeroSectionGoodsCounterTotal from '@MainPageComponents/HeroSectionGoodsCounterTotal';
import { getCounterNumbers } from '@/utils';
import { IProps } from './HeroSectionGoodsCounter.types';

const HeroSectionGoodsCounter: FC<IProps> = ({ isLoaded }) => {
  const ordersCount = useAppStore(selectOrdersCount);
  const maxBottles = useAppStore(selectMaxBottles);

  const reservedLink = `#${SectionsIds.preOrder}`;
  const counterNumbers = getCounterNumbers({ maxBottles, ordersCount });

  return (
    <Container>
      <HeroSectionGoodsCounterTotal
        numbers={counterNumbers}
        isLoaded={isLoaded}
      />
      <HeroSectionGoodsCounterReservedLink reservedLink={reservedLink} />
    </Container>
  );
};

export default HeroSectionGoodsCounter;

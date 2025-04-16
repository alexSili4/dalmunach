import { FC } from 'react';
import { Container } from './HeroSectionGoodsCounter.styled';
import { useAppStore } from '@/store/store';
import { selectMaxBottles, selectOrdersCount } from '@/store/app/selectors';
import ReservedLink from '@MainPageComponents/ReservedLink';
import HeroSectionGoodsCounterTotal from '@MainPageComponents/HeroSectionGoodsCounterTotal';
import { getCounterNumbers } from '@/utils';
import { IProps } from './HeroSectionGoodsCounter.types';

const HeroSectionGoodsCounter: FC<IProps> = ({ isLoaded }) => {
  const ordersCount = useAppStore(selectOrdersCount);
  const maxBottles = useAppStore(selectMaxBottles);

  const counterNumbers = getCounterNumbers({ maxBottles, ordersCount });

  return (
    <Container>
      <HeroSectionGoodsCounterTotal
        numbers={counterNumbers}
        isLoaded={isLoaded}
      />
      <ReservedLink />
    </Container>
  );
};

export default HeroSectionGoodsCounter;

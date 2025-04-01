import { FC } from 'react';
import { Bottle } from './AnimatedHistorySectionBottle.styled';
import { bottleImgs } from '@/constants';

const AnimatedHistorySectionBottle: FC = () => {
  return (
    <Bottle
      src={bottleImgs[0]}
      alt='Пляшка'
      initial={{ opacity: 0, x: '-80%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    />
  );
};

export default AnimatedHistorySectionBottle;

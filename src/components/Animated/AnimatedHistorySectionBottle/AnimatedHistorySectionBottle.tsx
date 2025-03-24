import { FC } from 'react';
import bottle from '@/images/main/bottle/bottle.png';
import { Bottle } from './AnimatedHistorySectionBottle.styled';

const AnimatedHistorySectionBottle: FC = () => {
  return (
    <Bottle
      src={bottle}
      alt='Пляшка'
      initial={{ opacity: 0, x: '-80%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    />
  );
};

export default AnimatedHistorySectionBottle;

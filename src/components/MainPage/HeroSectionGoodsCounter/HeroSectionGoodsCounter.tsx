import { FC, useState } from 'react';
import {
  Container,
  Background,
  ProgressWrap,
  BottleWrap,
} from './HeroSectionGoodsCounter.styled';
import progressBg from '@/images/hero/progress-bg.png';
import Bottle from '@/icons/hero/bottle.svg?react';
import { ClassNames } from '@/constants';
import Progress from '@/icons/hero/progress.svg?react';
import ProgressStroke from '@/icons/hero/progress-stroke.svg?react';

const HeroSectionGoodsCounter: FC = () => {
  // TODO fix
  const [total, setTotal] = useState<number>(342);
  const [current, setCurrent] = useState<number>(256);

  const progress = 50;

  return (
    <Container>
      <BottleWrap>
        <ProgressWrap>
          <Progress className={ClassNames.progress} />
          <Background progress={progress}></Background>
        </ProgressWrap>
        <ProgressStroke className={ClassNames.progressStroke} />
        <Bottle className={ClassNames.bottle} />
      </BottleWrap>
    </Container>
  );
};

export default HeroSectionGoodsCounter;

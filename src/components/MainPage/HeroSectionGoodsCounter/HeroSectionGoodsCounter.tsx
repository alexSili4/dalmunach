import { FC, useState } from 'react';
import {
  Container,
  Background,
  ProgressWrap,
  BottleWrap,
  ReservedQuantity,
  ReservedQuantityText,
  ReservedQuantityTitle,
  ReservedQuantityWrap,
  TotalQuantity,
  TotalQuantityText,
  TotalQuantityTitle,
  TotalQuantityWrap,
  Content,
  SaleClosedWrap,
  SaleClosedTitle,
  ReservedLink,
  ReservedLinkTitle,
  ReservedLinkTitleWrap,
} from './HeroSectionGoodsCounter.styled';
import Bottle from '@/icons/hero/bottle.svg?react';
import { ClassNames } from '@/constants';
import Progress from '@/icons/hero/progress.svg?react';
import ProgressStroke from '@/icons/hero/progress-stroke.svg?react';
import ReservedQuantityMarker from '@/icons/hero/reserved-quantity-marker.svg?react';
import TotalQuantityMarker from '@/icons/hero/total-quantity-marker.svg?react';
import { getCounterProgress } from '@/utils';
import SectionsIds from '@/constants/sectionsIds';

const HeroSectionGoodsCounter: FC = () => {
  // TODO fix
  const [
    total,
    // setTotal
  ] = useState<number>(342);
  const [
    current,
    // setCurrent
  ] = useState<number>(342);

  const progress = getCounterProgress({ current, total });
  const isSaleClosed = progress >= 100;
  const reservedLink = `#${SectionsIds.preOrder}`;

  return (
    <Container>
      <Content>
        <BottleWrap>
          <ProgressWrap>
            <Progress className={ClassNames.progress} />
            <Background progress={progress}></Background>
            <ReservedQuantityWrap progress={progress}>
              <ReservedQuantityMarker />
              <ReservedQuantityText>
                <ReservedQuantity>{current}</ReservedQuantity>
                <ReservedQuantityTitle>Зарезервовано</ReservedQuantityTitle>
              </ReservedQuantityText>
            </ReservedQuantityWrap>
            <TotalQuantityWrap>
              <TotalQuantityMarker />
              <TotalQuantityText>
                <TotalQuantityTitle>всього пляшок</TotalQuantityTitle>
                <TotalQuantity>{total}</TotalQuantity>
              </TotalQuantityText>
            </TotalQuantityWrap>
            {isSaleClosed && (
              <SaleClosedWrap>
                <SaleClosedTitle>продаж завершено</SaleClosedTitle>
              </SaleClosedWrap>
            )}
          </ProgressWrap>
          <ProgressStroke className={ClassNames.progressStroke} />
          <Bottle className={ClassNames.bottle} />
        </BottleWrap>
      </Content>
      <ReservedLink href={reservedLink}>
        <ReservedLinkTitleWrap>
          <ReservedLinkTitle>ПЕРЕДЗАМОВИТИ</ReservedLinkTitle>
        </ReservedLinkTitleWrap>
      </ReservedLink>
    </Container>
  );
};

export default HeroSectionGoodsCounter;

import { FC } from 'react';
import {
  BottleImg,
  BottleWrap,
  Container,
  Currency,
  Price,
  PriceWrap,
  Text,
  TextWrap,
  ShadowImg,
} from './PriceSectionDetails.styled';
import { bottleImgs } from '@/constants';
import shadow from '@/images/main/bottle/shadow.webp';

const PriceSectionDetails: FC = () => {
  return (
    <Container>
      <TextWrap>
        <Text>Віскі Dalmunach Distillery XXI century</Text>
        <PriceWrap>
          <Price>4499</Price>
          <Currency>ГРН</Currency>
        </PriceWrap>
      </TextWrap>
      <BottleWrap>
        <ShadowImg src={shadow} alt='Тінь' />
        <BottleImg src={bottleImgs[0]} alt='Пляшка' />
      </BottleWrap>
    </Container>
  );
};

export default PriceSectionDetails;

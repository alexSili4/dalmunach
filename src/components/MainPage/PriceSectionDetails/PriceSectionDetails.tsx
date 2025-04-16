import { FC } from 'react';
import primaryBottle from '@/images/main/bottle/primary-bottle-min.png';
import {
  BottleImg,
  Container,
  Currency,
  Price,
  PriceWrap,
  Text,
  TextWrap,
} from './PriceSectionDetails.styled';

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
      <BottleImg src={primaryBottle} alt='Пляшка' />
    </Container>
  );
};

export default PriceSectionDetails;

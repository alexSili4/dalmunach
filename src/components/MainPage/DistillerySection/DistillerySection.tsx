import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Container,
  Section,
  Text,
  Title,
  BottleImg,
  YeyImg,
} from './DistillerySection.styled';
import bottle from '@/images/distillery/bottle.png';
import yey from '@/images/distillery/yey.png';

const DistillerySection: FC = () => {
  return (
    <Section>
      <BottleImg src={bottle} alt='Пляшка' />
      <YeyImg src={yey} alt='Око' />
      <GeneralContainer>
        <Container>
          <Title>
            Про
            <br />
            дістелерію
          </Title>
          <Text>
            Дані про дистилерію: Регіон: Спейсайд
            <br />
            Власник: Chivas Brothers (Pernod Ricard)
            <br />
            Побудована на місці славнозвісної дистилерії Imperial, Dalmunach
            розпочала винокуріння в 2015 році.
            <br />
            <br />
            Технічне оснащення:
            <br /> ∙ 13-тонний заторний чан
            <br /> ∙ 16 ферментаційних чанів із нержавіючої сталі на 56 000 л
            <br /> ∙ 4 бражних перегонних куби об’ємом 28 000 л кожен
            <br /> ∙ 4 спиртових перегонних куби об’ємом 18 000 л кожен
            <br />
            <br />
            Перший офіційний реліз Dalmunach — односолодове 4-річне віскі
            бочкової міцності (59%) — вийшов восени 2019 року.
          </Text>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default DistillerySection;

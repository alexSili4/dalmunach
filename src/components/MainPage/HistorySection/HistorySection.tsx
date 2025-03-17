import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Section,
  Container,
  Text,
  Title,
  PlusesImg,
  ManImg,
  TriangleImg,
} from './HistorySection.styled';
import pluses from '@/images/history/pluses.png';
import man from '@/images/history/man.png';
import triangle from '@/images/history/triangle.png';

const HistorySection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <Title>Історія та творці віскі Dalmunach</Title>
          <Text>
            Від почину віку спливло вже чверть століття. За цей час у Шотландії
            розпочали роботу понад 30 нових солодових винокурень. Чимала частина
            з них вже може похвалитися власними віскі з витримкою, яка досягає
            двозначних чисел у роках.
            <br />
            <br />
            Ми — український ботлер Scyfion та спільнота Drinksetter by Silpo —
            започаткували проєкт «Distilleries of the XXI Century», щоб
            знайомити вас, вибагливі поціновувачі, та вас, шановні допитливі
            дилетанти, з однобочковими релізами віскі, відібраними нами в цих —
            шотландських постміленіальних — дистилеріях.
            <br />
            <br />
            Первісток проєкту — 8-річне односолодове віскі Dalmunach, бочка №
            4199. Дистильоване в червні 2015 року, бутильоване в березні 2024
            року, витримане весь термін у бочці формату хогсхед, перезібраної зі
            свіжої бочки з-під бурбону.
          </Text>
        </Container>
      </GeneralContainer>
      <PlusesImg src={pluses} alt='Декоративне зображення' />
      <TriangleImg src={triangle} alt='Трикутник' />
      <ManImg src={man} alt='Робітник' />
    </Section>
  );
};

export default HistorySection;

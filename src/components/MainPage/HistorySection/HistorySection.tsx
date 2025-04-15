import { FC, useRef } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Section,
  Container,
  PlusesImg,
  TriangleImg,
} from './HistorySection.styled';
import pluses from '@/images/main/history/pluses-min.png';
import triangle from '@/images/main/history/triangle-min.png';
import AnimatedHistorySectionBottle from '@AnimatedComponents/AnimatedHistorySectionBottle';
import AnimatedHistorySectionImages from '@AnimatedComponents/AnimatedHistorySectionImages';
import AnimatedHistorySectionTitle from '@AnimatedComponents/AnimatedHistorySectionTitle';
import { useInView } from 'framer-motion';
import AnimatedHistorySectionText from '@AnimatedComponents/AnimatedHistorySectionText';

const HistorySection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    margin: '-300px 0px -300px 0px',
    once: true,
  });

  const strings = [
    'Від почину віку спливло вже чверть століття. За цей час у Шотландії розпочали роботу понад 30 нових солодових винокурень. Чимала частина з них вже може похвалитися власними віскі з витримкою, яка досягає двозначних чисел у роках.',
    'Ми — український ботлер Scyfion та спільнота Drinksetter by Silpo — започаткували проєкт «Distilleries of the XXI Century», щоб знайомити вас, вибагливі поціновувачі, та вас, шановні допитливі дилетанти, з однобочковими релізами віскі, відібраними нами в цих — шотландських постміленіальних — дистилеріях.',
    'Первісток проєкту — 8-річне односолодове віскі Dalmunach, бочка №4199. Дистильоване в червні 2015 року, бутильоване в березні 2024 року, витримане весь термін у бочці формату хогсхед, перезібраної зі свіжої бочки з-під бурбону.',
  ];

  return (
    <Section ref={sectionRef}>
      <GeneralContainer>
        <Container>
          <AnimatedHistorySectionTitle
            text='Історія та творці віскі Dalmunach'
            inView={inView}
          />
          <AnimatedHistorySectionText inView={inView} strings={strings} />
        </Container>
      </GeneralContainer>
      <PlusesImg src={pluses} alt='Декоративне зображення' />
      <TriangleImg src={triangle} alt='Трикутник' />
      <AnimatedHistorySectionImages />
      <AnimatedHistorySectionBottle />
    </Section>
  );
};

export default HistorySection;

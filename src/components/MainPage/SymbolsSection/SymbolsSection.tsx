import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import booklet from '@/images/symbols/booklet.png';
import pluses from '@/images/symbols/pluses.png';
import diagrams from '@/images/symbols/diagrams.png';
import {
  Section,
  BookletImg,
  Container,
  DiagramsImg,
  PlusesImg,
  Text,
  Title,
} from './SymbolsSection.styled';

const SymbolsSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Про сенси символів' />
      <GeneralContainer>
        <Container>
          <Title>Бажаєш розгадати сенси символів?</Title>
          <Text>
            До кожної пляшки надається буклет з якого ви можете дізнатись сенси
            знаків.
          </Text>
        </Container>
      </GeneralContainer>
      <DiagramsImg src={diagrams} alt='Діаграми' />
      <PlusesImg src={pluses} alt='Декоративні символи' />
      <BookletImg src={booklet} alt='Буклет' />
    </Section>
  );
};

export default SymbolsSection;

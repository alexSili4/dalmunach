import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import booklet from '@/images/main/symbols/booklet.png';
import pluses from '@/images/main/symbols/pluses.png';
import diagrams from '@/images/main/symbols/diagrams.png';
import {
  Section,
  BookletImg,
  Container,
  DiagramsImg,
  PlusesImg,
  Text,
  Title,
} from './SymbolsSection.styled';
import { IProps } from './SymbolsSection.types';

const SymbolsSection: FC<IProps> = ({ sectionRef }) => {
  return (
    <Section ref={sectionRef}>
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

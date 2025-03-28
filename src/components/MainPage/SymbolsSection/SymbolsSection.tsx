import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import pluses from '@/images/main/symbols/pluses-min.png';
import {
  Section,
  Container,
  PlusesImg,
  Text,
  Title,
} from './SymbolsSection.styled';
import { IProps } from './SymbolsSection.types';
import AnimatedSymbolsSectionImages from '@AnimatedComponents/AnimatedSymbolsSectionImages';

const SymbolsSection: FC<IProps> = ({ sectionRef, inView }) => {
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
      <PlusesImg src={pluses} alt='Декоративні символи' />
      <AnimatedSymbolsSectionImages inView={inView} />
    </Section>
  );
};

export default SymbolsSection;

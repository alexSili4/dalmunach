import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import pluses from '@/images/main/symbols/pluses-min.png';
import { Section, Container, PlusesImg } from './SymbolsSection.styled';
import { IProps } from './SymbolsSection.types';
import AnimatedSymbolsSectionImages from '@AnimatedComponents/AnimatedSymbolsSectionImages';
import AnimatedSymbolsSectionTitle from '@AnimatedComponents/AnimatedSymbolsSectionTitle';
import AnimatedSymbolsSectionText from '@AnimatedComponents/AnimatedSymbolsSectionText';

const SymbolsSection: FC<IProps> = ({ sectionRef, inView }) => {
  return (
    <Section ref={sectionRef}>
      <HiddenSectionTitle title='Про сенси символів' />
      <GeneralContainer>
        <Container>
          <AnimatedSymbolsSectionTitle
            text='Бажаєш розгадати сенси символів?'
            inView={inView}
          />
          <AnimatedSymbolsSectionText
            text='До кожної пляшки надається буклет з якого ви можете дізнатись сенси знаків.'
            inView={inView}
          />
        </Container>
      </GeneralContainer>
      <PlusesImg src={pluses} alt='Декоративні символи' />
      <AnimatedSymbolsSectionImages inView={inView} />
    </Section>
  );
};

export default SymbolsSection;

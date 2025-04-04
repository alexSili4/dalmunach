import { FC, useRef } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import pluses from '@/images/main/symbols/pluses-min.png';
import { Section, Container, PlusesImg } from './SymbolsSection.styled';
import AnimatedSymbolsSectionImages from '@AnimatedComponents/AnimatedSymbolsSectionImages';
import AnimatedSymbolsSectionTitle from '@AnimatedComponents/AnimatedSymbolsSectionTitle';
import AnimatedSymbolsSectionText from '@AnimatedComponents/AnimatedSymbolsSectionText';
import { useInView } from 'framer-motion';

const SymbolsSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-200px 0px -200px 0px',
  });

  return (
    <Section>
      <HiddenSectionTitle title='Про сенси символів' />
      <GeneralContainer>
        <Container ref={containerRef}>
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
      <AnimatedSymbolsSectionImages />
    </Section>
  );
};

export default SymbolsSection;

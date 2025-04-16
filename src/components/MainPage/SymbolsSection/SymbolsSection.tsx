import { FC, useRef } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import pluses from '@/images/main/symbols/pluses-min.png';
import {
  Section,
  Container,
  PlusesImg,
  TextWrap,
} from './SymbolsSection.styled';
import AnimatedSymbolsSectionImages from '@AnimatedComponents/AnimatedSymbolsSectionImages';
import AnimatedSymbolsSectionTitle from '@AnimatedComponents/AnimatedSymbolsSectionTitle';
import AnimatedSymbolsSectionText from '@AnimatedComponents/AnimatedSymbolsSectionText';
import { useInView } from 'framer-motion';
import ReservedLink from '@MainPageComponents/ReservedLink';
import { IProps } from './SymbolsSection.types';

const SymbolsSection: FC<IProps> = ({ sectionRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-200px 0px -200px 0px',
    once: true,
  });

  return (
    <Section ref={sectionRef}>
      <HiddenSectionTitle title='Про сенси символів' />
      <GeneralContainer>
        <Container ref={containerRef}>
          <TextWrap>
            <AnimatedSymbolsSectionTitle
              text='Бажаєте розгадати сенси символів?'
              inView={inView}
            />
            <AnimatedSymbolsSectionText
              text='До кожної пляшки надається буклет, з якого ви можете дізнатися сенси знаків.'
              inView={inView}
            />
          </TextWrap>
          <ReservedLink />
        </Container>
      </GeneralContainer>
      <PlusesImg src={pluses} alt='Декоративні символи' />
      <AnimatedSymbolsSectionImages />
    </Section>
  );
};

export default SymbolsSection;

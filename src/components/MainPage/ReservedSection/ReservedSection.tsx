import { FC, useRef } from 'react';
import ReservedSectionFormContainer from '@MainPageComponents/ReservedSectionFormContainer';
import { Section, Container } from './ReservedSection.styled';
import { SectionsIds } from '@/constants';
import { useInView } from 'framer-motion';
import { useParallax } from '@/hooks';

const ReservedSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const { containerRef, translateY } = useParallax(70);

  return (
    <Section id={SectionsIds.preOrder} ref={sectionRef}>
      <Container ref={containerRef}>
        <ReservedSectionFormContainer inView={inView} translateY={translateY} />
      </Container>
    </Section>
  );
};

export default ReservedSection;

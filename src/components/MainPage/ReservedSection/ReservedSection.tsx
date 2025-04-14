import { FC } from 'react';
import ReservedSectionFormContainer from '@MainPageComponents/ReservedSectionFormContainer';
import { Section, Container } from './ReservedSection.styled';
import { SectionsIds } from '@/constants';
import { useInView } from 'framer-motion';
import { useParallax } from '@/hooks';

const ReservedSection: FC = () => {
  const { containerRef, translateY } = useParallax(70);
  const inView = useInView(containerRef, {
    margin: '-300px 0px -300px 0px',
    once: true,
  });

  return (
    <Section id={SectionsIds.preOrder}>
      <Container ref={containerRef}>
        <ReservedSectionFormContainer inView={inView} translateY={translateY} />
      </Container>
    </Section>
  );
};

export default ReservedSection;

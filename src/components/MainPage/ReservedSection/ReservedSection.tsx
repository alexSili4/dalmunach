import { FC, useRef } from 'react';
import ReservedSectionFormContainer from '@MainPageComponents/ReservedSectionFormContainer';
import { Section, Container } from './ReservedSection.styled';
import { SectionsIds } from '@/constants';
import { useInView } from 'framer-motion';

const ReservedSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    margin: '-300px 0px -300px 0px',
  });

  return (
    <Section id={SectionsIds.preOrder} ref={sectionRef}>
      <Container>
        <ReservedSectionFormContainer inView={inView} />
      </Container>
    </Section>
  );
};

export default ReservedSection;

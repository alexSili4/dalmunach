import { FC } from 'react';
import ReservedSectionFormContainer from '@MainPageComponents/ReservedSectionFormContainer';
import { Section, Container } from './ReservedSection.styled';
import { SectionsIds } from '@/constants';

const ReservedSection: FC = () => {
  return (
    <Section id={SectionsIds.preOrder}>
      <Container>
        <ReservedSectionFormContainer />
      </Container>
    </Section>
  );
};

export default ReservedSection;

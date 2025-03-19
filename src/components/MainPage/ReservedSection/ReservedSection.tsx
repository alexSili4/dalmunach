import { FC } from 'react';
import ReservedSectionFormContainer from '@MainPageComponents/ReservedSectionFormContainer';
import { Section, Container } from './ReservedSection.styled';

const ReservedSection: FC = () => {
  return (
    <Section>
      <Container>
        <ReservedSectionFormContainer />
      </Container>
    </Section>
  );
};

export default ReservedSection;

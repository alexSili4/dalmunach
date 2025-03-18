import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import { FC } from 'react';
import { Section } from './ShowBottleSection.styled';

const ShowBottleSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='демонстрація пляшки' />
    </Section>
  );
};

export default ShowBottleSection;

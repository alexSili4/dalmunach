import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { Section } from './PriceSection.styled';
import PriceSectionDetails from '@MainPageComponents/PriceSectionDetails';

const PriceSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Прайс на віскі' />
      <GeneralContainer>
        <PriceSectionDetails />
      </GeneralContainer>
    </Section>
  );
};

export default PriceSection;

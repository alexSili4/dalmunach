import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Container,
  Section,
  BottlePicture,
  EyeImg,
} from './DistillerySection.styled';
import bottle from '@/images/main/distillery/bottle-min.png';
import bottleMob from '@/images/main/distillery/bottle-mob-min.png';
import { theme } from '@/constants';
import AnimatedDistillerySectionTitle from '@AnimatedComponents/AnimatedDistillerySectionTitle';
import AnimatedDistillerySectionText from '@AnimatedComponents/AnimatedDistillerySectionText';
import DistillerySectionBg from '@MainPageComponents/DistillerySectionBg';
import { IProps } from './DistillerySection.types';
import eye from '@/images/main/distillery/eye-min.png';

const DistillerySection: FC<IProps> = ({ sectionRef, inView }) => {
  const tabletPictureMedia = `(min-width: ${theme.breakpoints.tablet}px)`;

  return (
    <Section ref={sectionRef}>
      <DistillerySectionBg />
      <BottlePicture>
        <source srcSet={bottle} media={tabletPictureMedia} />
        <img src={bottleMob} alt='Пляшка' />
      </BottlePicture>
      <EyeImg src={eye} alt='Око' />
      <GeneralContainer>
        <Container>
          <AnimatedDistillerySectionTitle
            strings={['Про', 'дистилерію']}
            inView={inView}
          />
          <AnimatedDistillerySectionText
            region='<strong>Регіон:</strong> Спейсайд'
            owner='<strong>Власник:</strong> Chivas Brothers (Pernod Ricard)'
            location='Побудована на місці славнозвісної дистилерії Imperial, Dalmunach розпочала винокуріння в 2015 році.'
            subtitle='<strong>Технічне</strong> <strong>оснащення:</strong>'
            equipment={[
              ' ∙ 13-тонний заторний чан',
              ' ∙ 16 ферментаційних чанів із нержавіючої сталі на 56 000 л',
              ' ∙ 4 бражних перегонних куби об’ємом 28 000 л кожен',
              ' ∙ 4 спиртових перегонних куби об’ємом 18 000 л кожен',
            ]}
            history='<strong>Перший</strong> <strong>офіційний</strong> <strong>реліз</strong> <strong>Dalmunach</strong> — односолодове 4-річне віскі бочкової міцності (59%) — вийшов восени 2019 року.'
            inView={inView}
          />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default DistillerySection;

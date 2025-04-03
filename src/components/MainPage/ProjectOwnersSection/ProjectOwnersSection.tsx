import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import {
  Section,
  Comment,
  Container,
  Subtitle,
  Text,
  Title,
  BgCutPicture,
  BgCutImg,
  CheersImg,
  TitleWrap,
  TextWrap,
} from './ProjectOwnersSection.styled';
import { theme } from '@/constants';
import bgCutDesk from '@/images/main/projectOwners/section-bg-cut-desk-min.png';
import bgCutTablet from '@/images/main/projectOwners/section-bg-cut-tablet-min.png';
import bgCutMob from '@/images/main/projectOwners/section-bg-cut-mob-min.png';
import cheers from '@/images/main/projectOwners/cheers-min.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const ProjectOwnersSection: FC = () => {
  const bgCutPictureTabletMedia = `(min-width: ${theme.breakpoints.tablet}px)`;
  const bgCutPictureDeskMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
    <Section>
      <HiddenSectionTitle title='Співвласники проекту Scyfion' />
      <GeneralContainer>
        <Container>
          <Comment>
            <TextWrap>
              <Text>
                Вискі, створені з любов'ю та майстерністю, розкривають унікальні
                смаки та аромати, які відображають характер кожного регіону.
                Кожна пляшка - це історія, що поєднує традиції та інновації.
                Досліджуйте світ виски, де кожен ковток приносить нові враження
                та відкриття.
              </Text>
              <TitleWrap>
                <Title>Замосковний Руслан</Title>
                <Subtitle>Співвласник проекту Scyfion</Subtitle>
              </TitleWrap>
            </TextWrap>
          </Comment>
          <Comment>
            <TextWrap>
              <Text>
                Вискі, створені з любов'ю та майстерністю, розкривають унікальні
                смаки та аромати, які відображають характер кожного регіону.
                Кожна пляшка - це історія, що поєднує традиції та інновації.
                Досліджуйте світ виски, де кожен ковток приносить нові враження
                та відкриття.
              </Text>
              <TitleWrap>
                <Title>Близнюк Платон</Title>
                <Subtitle>Співвласник проекту Scyfion</Subtitle>
              </TitleWrap>
            </TextWrap>
          </Comment>
        </Container>
      </GeneralContainer>
      <BgCutPicture>
        <source srcSet={bgCutDesk} media={bgCutPictureDeskMedia} />
        <source srcSet={bgCutTablet} media={bgCutPictureTabletMedia} />
        <BgCutImg src={bgCutMob} alt='Зріз' />
      </BgCutPicture>
      <CheersImg src={cheers} alt='Декоративний надпис' />
    </Section>
  );
};

export default ProjectOwnersSection;

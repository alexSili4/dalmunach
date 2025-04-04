import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import {
  Section,
  Comment,
  Container,
  Subtitle,
  Text,
  Title,
  TitleWrap,
  TextWrap,
} from './ProjectOwnersSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ProjectOwnersSectionBgImages from '@MainPageComponents/ProjectOwnersSectionBgImages';

const ProjectOwnersSection: FC = () => {
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
          <Comment isFlexEnd>
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
      <ProjectOwnersSectionBgImages />
    </Section>
  );
};

export default ProjectOwnersSection;

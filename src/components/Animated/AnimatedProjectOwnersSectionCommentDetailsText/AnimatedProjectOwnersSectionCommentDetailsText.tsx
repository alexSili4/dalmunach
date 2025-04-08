import { Symbols } from '@/constants';
import { useAnimatedSectionText } from '@/hooks';
import { FC, Fragment } from 'react';
import { IProps } from './AnimatedProjectOwnersSectionCommentDetailsText.types';
import { getIsLastIndex, getTextWord } from '@/utils';
import {
  Container,
  Subtitle,
  Title,
} from './AnimatedProjectOwnersSectionCommentDetailsText.styled';
import AnimatedProjectOwnersSectionCommentSubtitle from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentSubtitle';
import AnimatedProjectOwnersSectionCommentTitle from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentTitle';
import AnimatedProjectOwnersSectionCommentText from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentText';

const AnimatedProjectOwnersSectionCommentDetailsText: FC<IProps> = ({
  title,
  subtitle,
  strings,
  inView,
}) => {
  const { containerVariants, elementVariants, animate } =
    useAnimatedSectionText({ inView, delay: 1.2 });
  const titleWords = title.split(Symbols.space);
  const subtitleWords = subtitle.split(Symbols.space);

  return (
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      {strings.map((item, index, array) => {
        const isLastIndex = getIsLastIndex({ index, array });
        const commentText = (
          <AnimatedProjectOwnersSectionCommentText
            text={item}
            variants={elementVariants}
          />
        );

        return (
          <Fragment key={index}>
            {isLastIndex ? (
              commentText
            ) : (
              <>
                {commentText}
                <br />
              </>
            )}
          </Fragment>
        );
      })}
      <Title>
        {titleWords.map((word, index, words) => {
          const textWord = getTextWord({ index, word, words });

          return (
            <AnimatedProjectOwnersSectionCommentTitle
              textWord={textWord}
              variants={elementVariants}
              key={index}
            />
          );
        })}
      </Title>
      <Subtitle>
        {subtitleWords.map((word, index, words) => {
          const textWord = getTextWord({ index, word, words });

          return (
            <AnimatedProjectOwnersSectionCommentSubtitle
              textWord={textWord}
              variants={elementVariants}
              key={index}
            />
          );
        })}
      </Subtitle>
    </Container>
  );
};

export default AnimatedProjectOwnersSectionCommentDetailsText;

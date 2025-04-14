import { FC, Fragment } from 'react';
import { IProps } from './AnimatedAboutSectionText.types';
import { Text } from './AnimatedAboutSectionText.styled';
import { getIsLastIndex, getTextWord } from '@/utils';
import { useAnimatedSectionText } from '@/hooks';
import { Symbols } from '@/constants';
import AnimatedAboutSectionTextPart from '@AnimatedComponents/AnimatedAboutSectionTextPart';
import AnimatedAboutSectionDescText from '@AnimatedComponents/AnimatedAboutSectionDescText';

const AnimatedAboutSectionText: FC<IProps> = ({ title, strings, inView }) => {
  const { containerVariants, elementVariants, animate } =
    useAnimatedSectionText({ inView });
  const titleWords = title.split(Symbols.space);

  return (
    <Text variants={containerVariants} initial='hidden' animate={animate}>
      {titleWords.map((word, index, words) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <AnimatedAboutSectionTextPart
            textWord={textWord}
            variants={elementVariants}
            key={index}
          />
        );
      })}
      <br />
      <br />
      {strings.map((item, index, array) => {
        const isLastIndex = getIsLastIndex({ index, array });
        const descText = (
          <AnimatedAboutSectionDescText
            text={item}
            variants={elementVariants}
          />
        );

        return (
          <Fragment key={index}>
            {isLastIndex ? (
              descText
            ) : (
              <>
                {descText}
                <br />
              </>
            )}
          </Fragment>
        );
      })}
    </Text>
  );
};

export default AnimatedAboutSectionText;

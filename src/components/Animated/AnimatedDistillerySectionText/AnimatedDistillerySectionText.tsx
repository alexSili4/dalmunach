import { FC, Fragment } from 'react';
import { IProps } from './AnimatedDistillerySectionText.types';
import { Text } from './AnimatedDistillerySectionText.styled';
import { useAnimatedSectionText } from '@/hooks';
import { Symbols } from '@/constants';
import { getIsLastIndex, getTextWord } from '@/utils';
import AnimatedDistillerySectionTextPart from '@AnimatedComponents/AnimatedDistillerySectionTextPart';
import AnimatedDistillerySectionEquipmentText from '@AnimatedComponents/AnimatedDistillerySectionEquipmentText';

const AnimatedDistillerySectionText: FC<IProps> = ({
  inView,
  equipment,
  history,
  location,
  owner,
  region,
  subtitle,
}) => {
  const { containerVariants, elementVariants, animate } =
    useAnimatedSectionText({ inView });
  const regionWords = region.split(Symbols.space);
  const ownerWords = owner.split(Symbols.space);
  const locationWords = location.split(Symbols.space);
  const subtitleWords = subtitle.split(Symbols.space);
  const historyWords = history.split(Symbols.space);

  return (
    <Text variants={containerVariants} initial='hidden' animate={animate}>
      {regionWords.map((word, index, words) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <AnimatedDistillerySectionTextPart
            textWord={textWord}
            variants={elementVariants}
            key={index}
          />
        );
      })}
      <br />
      {ownerWords.map((word, index, words) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <AnimatedDistillerySectionTextPart
            textWord={textWord}
            variants={elementVariants}
            key={index}
          />
        );
      })}
      <br />
      {locationWords.map((word, index, words) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <AnimatedDistillerySectionTextPart
            textWord={textWord}
            variants={elementVariants}
            key={index}
          />
        );
      })}
      <br />
      <br />
      {subtitleWords.map((word, index, words) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <AnimatedDistillerySectionTextPart
            textWord={textWord}
            variants={elementVariants}
            isTitle
            key={index}
          />
        );
      })}
      <br />
      <br />
      {equipment.map((item, index, array) => {
        const isLastIndex = getIsLastIndex({ index, array });

        return (
          <Fragment key={index}>
            {isLastIndex ? (
              <AnimatedDistillerySectionEquipmentText
                text={item}
                variants={elementVariants}
              />
            ) : (
              <>
                <AnimatedDistillerySectionEquipmentText
                  text={item}
                  variants={elementVariants}
                />
                <br />
              </>
            )}
          </Fragment>
        );
      })}
      <br />
      <br />
      {historyWords.map((word, index, words) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <AnimatedDistillerySectionTextPart
            textWord={textWord}
            variants={elementVariants}
            key={index}
          />
        );
      })}
    </Text>
  );
};

export default AnimatedDistillerySectionText;

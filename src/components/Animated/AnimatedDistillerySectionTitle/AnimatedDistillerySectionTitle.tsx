import { FC, Fragment } from 'react';
import { IProps } from './AnimatedDistillerySectionTitle.types';
import { Text } from './AnimatedDistillerySectionTitle.styled';
import { getIsLastIndex } from '@/utils';
import AnimatedDistillerySectionTextPart from '@/components/Animated/AnimatedDistillerySectionTitlePart';
import { Symbols } from '@/constants';
import { useAnimatedSectionTitle } from '@/hooks';

const AnimatedDistillerySectionTitle: FC<IProps> = ({ strings, inView }) => {
  const { containerVariants, elementVariants, animate } =
    useAnimatedSectionTitle({
      inView,
    });

  return (
    <Text variants={containerVariants} initial='hidden' animate={animate}>
      {strings.map((text, index) => {
        const isLastIndex = getIsLastIndex({ array: strings, index });
        const words = text.split(Symbols.space);

        return (
          <Fragment key={index}>
            {isLastIndex ? (
              <AnimatedDistillerySectionTextPart
                words={words}
                variants={elementVariants}
              />
            ) : (
              <>
                <AnimatedDistillerySectionTextPart
                  words={words}
                  variants={elementVariants}
                />
                <br />
              </>
            )}
          </Fragment>
        );
      })}
    </Text>
  );
};

export default AnimatedDistillerySectionTitle;

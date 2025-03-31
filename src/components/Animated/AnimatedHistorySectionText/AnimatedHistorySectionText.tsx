import { FC, Fragment } from 'react';
import { IProps } from './AnimatedHistorySectionText.types';
import { Text } from './AnimatedHistorySectionText.styled';
import { getIsLastIndex } from '@/utils';
import AnimatedHistorySectionTextPart from '@AnimatedComponents/AnimatedHistorySectionTextPart';
import { Symbols } from '@/constants';
import { useAnimatedSectionText } from '@/hooks';

const AnimatedHistorySectionText: FC<IProps> = ({ strings, inView }) => {
  const { containerVariants, elementVariants, animate } =
    useAnimatedSectionText({
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
              <AnimatedHistorySectionTextPart
                words={words}
                variants={elementVariants}
              />
            ) : (
              <>
                <AnimatedHistorySectionTextPart
                  words={words}
                  variants={elementVariants}
                />
                <br />
                <br />
              </>
            )}
          </Fragment>
        );
      })}
    </Text>
  );
};

export default AnimatedHistorySectionText;

import { FC } from 'react';
import { IProps } from './AnimatedHistorySectionTitle.types';
import {
  Title,
  Symbol,
  SymbolContainer,
  Word,
} from './AnimatedHistorySectionTitle.styled';
import { getTitleSymbols } from '@/utils';
import { useAnimatedSectionTitle } from '@/hooks';

const AnimatedHistorySectionTitle: FC<IProps> = ({ text, inView }) => {
  const { containerVariants, elementVariants, animate, words } =
    useAnimatedSectionTitle({
      text,
      inView,
    });

  return (
    <Title variants={containerVariants} initial='hidden' animate={animate}>
      {words.map((word, index) => {
        const symbols = getTitleSymbols({ index, word, words });

        return (
          <Word key={index}>
            {symbols.map((symbol, index) => (
              <SymbolContainer key={index}>
                <Symbol variants={elementVariants}>{symbol}</Symbol>
              </SymbolContainer>
            ))}
          </Word>
        );
      })}
    </Title>
  );
};

export default AnimatedHistorySectionTitle;

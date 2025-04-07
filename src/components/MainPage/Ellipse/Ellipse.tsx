import { FC, useState } from 'react';
import { Container } from './Ellipse.styled';
import { IProps } from './Ellipse.types';

const Ellipse: FC<IProps> = ({ isLoaded }) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false);

  const onAnimationIteration = () => {
    if (isLoaded) {
      setIsAnimationEnd(true);
    }
  };

  return (
    <Container
      isAnimationEnd={isAnimationEnd}
      onAnimationIteration={onAnimationIteration}
    ></Container>
  );
};

export default Ellipse;

import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader: FC = () => (
  <Container>
    <ThreeDots
      height='120'
      width='120'
      radius='9'
      color='#808080'
      ariaLabel='three-dots-loading'
      visible
    />
  </Container>
);

export default Loader;

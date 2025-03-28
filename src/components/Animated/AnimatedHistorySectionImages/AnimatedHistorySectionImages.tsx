import { FC } from 'react';
import man from '@/images/main/history/man-min.png';
import { ManImgWrap, ManImg } from './AnimatedHistorySectionImages.styled';

const AnimatedHistorySectionImages: FC = () => {
  return (
    <ManImgWrap
      initial={{ x: '40%', rotate: 90, opacity: 0 }}
      whileInView={{
        x: ['40%', '0'],
        rotate: [90, 90, -3, 3, -2, 2, -1, 1, -0.5, 0.5, 0],
        opacity: 1,
        transition: {
          x: { duration: 0.8 },
          opacity: { duration: 0.8 },
          rotate: {
            delay: 0.8,
            duration: 1.5,
          },
        },
      }}
    >
      <ManImg src={man} alt='Робітник' />
    </ManImgWrap>
  );
};

export default AnimatedHistorySectionImages;

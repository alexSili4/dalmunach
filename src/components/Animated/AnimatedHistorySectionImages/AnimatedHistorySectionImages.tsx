import { FC, useRef } from 'react';
import man from '@/images/main/history/man-min.png';
import { ManImgWrap, ManImg } from './AnimatedHistorySectionImages.styled';
import { useInView, Variants } from 'framer-motion';

const AnimatedHistorySectionImages: FC = () => {
  const manImgWrapRef = useRef<HTMLDivElement>(null);
  const manImgWrapInView = useInView(manImgWrapRef, {
    margin: '-200px 0px -400px 0px',
    once: true,
  });
  const animate = manImgWrapInView ? 'visible' : 'hidden';

  const manImgWrapContainerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const manImgVariants: Variants = {
    hidden: {
      x: '100%',
      rotate: 90,
      opacity: 0,
      transition: {
        x: { duration: 0.8, delay: 1.5 },
        opacity: { duration: 0.8, delay: 1.5 },
        rotate: {
          duration: 1.5,
        },
      },
    },
    visible: {
      x: ['100%', '0'],
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
    },
  };

  return (
    <>
      <ManImgWrap
        ref={manImgWrapRef}
        variants={manImgWrapContainerVariants}
        initial='hidden'
        animate={animate}
      >
        <ManImg src={man} alt='Робітник' variants={manImgVariants} />
      </ManImgWrap>
    </>
  );
};

export default AnimatedHistorySectionImages;

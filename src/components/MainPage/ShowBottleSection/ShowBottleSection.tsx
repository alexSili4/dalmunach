import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import { FC, useEffect, useRef, useState } from 'react';
import {
  Section,
  DeregentImg,
  PeopleDeskImg,
  PeopleMobImg,
  RayImg,
  SculptureImg,
  EllipseLeft,
  EllipseRight,
  Content,
  Container,
} from './ShowBottleSection.styled';
import deregent from '@/images/main/showBottle/deregent-min.png';
import peopleDesk from '@/images/main/showBottle/people-desk-min.png';
import peopleMob from '@/images/main/showBottle/people-mob-min.png';
import ray from '@/images/main/showBottle/ray-min.png';
import sculpture from '@/images/main/showBottle/sculpture-min.png';
import { IProps } from './ShowBottleSection.types';
import { preventArrowKeys, preventDefault } from '@/utils';

const ShowBottleSection: FC<IProps> = ({
  containerRef,
  updateShowHandAnimation,
  showHandAnimation,
}) => {
  const [top, setTop] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onSectionScroll = () => {
      const container = contentRef.current;

      if (container) {
        const { top: containerTop } = container.getBoundingClientRect();
        const roundContainerTop = Math.round(containerTop);
        const roundTop = Math.round(top);
        const shouldShowHandAnimation = roundContainerTop === roundTop;

        updateShowHandAnimation(shouldShowHandAnimation);

        if (shouldShowHandAnimation && !showHandAnimation) {
          window.addEventListener('wheel', preventDefault, { passive: false });
          window.addEventListener('touchmove', preventDefault, {
            passive: false,
          });
          window.addEventListener('keydown', preventArrowKeys, {
            passive: false,
          });
        }
      }
    };

    window.addEventListener('scroll', onSectionScroll);

    return () => {
      window.removeEventListener('scroll', onSectionScroll);
    };
  }, [showHandAnimation, top]);

  useEffect(() => {
    const container = contentRef.current;
    const windowHeight = window.innerHeight;

    if (container) {
      const containerHeight = container.scrollHeight;
      const top = windowHeight - containerHeight;

      if (top < 0) {
        setTop(top);
      }
    }
  }, []);

  return (
    <Section>
      <HiddenSectionTitle title='Демонстрація пляшки' />
      <Container ref={containerRef}>
        <Content ref={contentRef} top={top}>
          <RayImg src={ray} alt='Промінь' />
          <EllipseRight></EllipseRight>
          <DeregentImg src={deregent} alt='Дережер' />
          <EllipseLeft></EllipseLeft>
          <SculptureImg src={sculpture} alt='Скульптура' />
          <PeopleMobImg src={peopleMob} alt='Люди' />
          <PeopleDeskImg src={peopleDesk} alt='Люди' />
        </Content>
      </Container>
    </Section>
  );
};

export default ShowBottleSection;

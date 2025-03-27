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
  Container,
} from './ShowBottleSection.styled';
import deregent from '@/images/main/showBottle/deregent-min.png';
import peopleDesk from '@/images/main/showBottle/people-desk-min.png';
import peopleMob from '@/images/main/showBottle/people-mob-min.png';
import ray from '@/images/main/showBottle/ray-min.png';
import sculpture from '@/images/main/showBottle/sculpture-min.png';
import { IProps } from './ShowBottleSection.types';

const ShowBottleSection: FC<IProps> = ({ sectionRef }) => {
  const [top, setTop] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    const windowHeight = window.innerHeight;

    if (currentContainer) {
      const containerHeight = currentContainer.scrollHeight;
      const top = windowHeight - containerHeight;

      if (top < 0) {
        setTop(top);
      }
    }
  }, []);

  return (
    <Section ref={sectionRef}>
      <HiddenSectionTitle title='Демонстрація пляшки' />
      <Container ref={containerRef} top={top}>
        <RayImg src={ray} alt='Промінь' />
        <EllipseRight></EllipseRight>
        <DeregentImg src={deregent} alt='Дережер' />
        <EllipseLeft></EllipseLeft>
        <SculptureImg src={sculpture} alt='Скульптура' />
        <PeopleMobImg src={peopleMob} alt='Люди' />
        <PeopleDeskImg src={peopleDesk} alt='Люди' />
      </Container>
    </Section>
  );
};

export default ShowBottleSection;

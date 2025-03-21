import HiddenSectionTitle from '@/components/General/HiddenSectionTitle';
import { FC, useEffect, useRef, useState } from 'react';
import {
  Section,
  DeregentImg,
  HandImg,
  PeopleDeskImg,
  PeopleMobImg,
  RayImg,
  SculptureImg,
  StandImg,
  EllipseLeft,
  EllipseRight,
  Container,
} from './ShowBottleSection.styled';
import deregent from '@/images/main/showBottle/deregent.png';
import hand from '@/images/main/showBottle/hand.png';
import peopleDesk from '@/images/main/showBottle/people-desk.png';
import peopleMob from '@/images/main/showBottle/people-mob.png';
import ray from '@/images/main/showBottle/ray.png';
import sculpture from '@/images/main/showBottle/sculpture.png';
import stand from '@/images/main/showBottle/stand.png';

const ShowBottleSection: FC = () => {
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
    <Section>
      <HiddenSectionTitle title='Демонстрація пляшки' />
      <Container ref={containerRef} top={top}>
        <DeregentImg src={deregent} alt='Дережер' />
        <RayImg src={ray} alt='Промінь' />
        <EllipseLeft></EllipseLeft>
        <SculptureImg src={sculpture} alt='Скульптура' />
        <EllipseRight></EllipseRight>
        <PeopleMobImg src={peopleMob} alt='Люди' />
        <PeopleDeskImg src={peopleDesk} alt='Люди' />
        <HandImg src={hand} alt='Рука' />
        <StandImg src={stand} alt='Стенд' />
      </Container>
    </Section>
  );
};

export default ShowBottleSection;

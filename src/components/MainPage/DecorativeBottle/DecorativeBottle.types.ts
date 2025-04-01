import { MotionValueNumber, Strings } from '@/types/types';

export interface IProps {
  showBottleSectionInView: boolean;
  symbolsSectionInView: boolean;
  bottleScale: MotionValueNumber;
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
}

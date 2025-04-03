import { SetBooleanFunc } from '@/types/funcs.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  containerRef: RefDivObject;
  showHandAnimation: boolean;
  updateShowHandAnimation: SetBooleanFunc;
}

export interface IStyledContainerProps {
  top: number;
}

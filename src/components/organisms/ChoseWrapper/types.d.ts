import { HandType } from '@atoms/HandCircle/types';

export interface ChoseWrapperProps {
  hand: HandType
  onClick(): void
}
export interface HouseMove {
  is: boolean,
  hand: HandType
}

import { MouseEvent } from 'react';

export type HandType = 'scissors'|'paper'|'rock'
export interface HandCircleProps {
  type: HandType,
  img: string,
  className?: string
  onClick?(ev: MouseEvent<HTMLButtonElement> ): void
  show?: boolean
}

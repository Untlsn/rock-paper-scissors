import iconPaper from '@assets/icons/icon-paper.svg';
import iconRock from '@assets/icons/icon-rock.svg';
import iconScissors from '@assets/icons/icon-scissors.svg';
import { HandType } from '@atoms/HandCircle/types';
import { HouseMove } from '@organisms/ChoseWrapper/types';


const randHand = (): HandType => {
  const num = Math.random() * 3;
  if(num < 1) return 'rock';
  if(num < 2) return 'scissors';
  return 'paper';
};

const compereHands = (hand1: HandType, hand2: HandType) => {
  switch (hand1) {
    case 'paper': {
      switch (hand2) {
        case 'paper': return 0;
        case 'rock': return 1;
        default: return -1; // scissors
      }
    }
    case 'rock': {
      switch (hand2) {
        case 'paper': return -1;
        case 'rock': return 0;
        default: return 1; // scissors
      }
    }
    default: { // scissors
      switch (hand2) {
        case 'paper': return 1;
        case 'rock': return -1;
        default: return 0; // scissors
      }
    }
  }
};

const timeoutWait = 1000;

export const timeoutFn = (
  setHouseMove: (value: HouseMove) => void,
  setWinHand: (value: number) => void,
  hand: HandType
) => new Promise<-1|0|1>((res) => {
  setTimeout(() => {
    const randedHand = randHand();
    setHouseMove({
      is: true,
      hand: randedHand
    });
    setTimeout(() => {
      const result = compereHands(hand, randedHand);
      setWinHand(result);
      res(result);
    }, timeoutWait);
  }, timeoutWait);
});

export const promptWin = (win?: number) => {
  switch (win) {
    case -1: return 'you lose!';
    case 1: return 'you win!';
    case 0: return 'draw';
    default: return 'vs';
  }
};

export const imgByName: Record<HandType, string> = {
  'rock': iconRock,
  'scissors': iconScissors,
  'paper': iconPaper
};

export const setHand = (hand: HandType) => ({
  type: hand,
  img: imgByName[hand]
});

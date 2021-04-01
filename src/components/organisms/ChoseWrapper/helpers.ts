import iconPaper from '@assets/icons/icon-paper.svg';
import iconRock from '@assets/icons/icon-rock.svg';
import iconScissors from '@assets/icons/icon-scissors.svg';
import { HandType } from '@atoms/HandCircle/types';
import { HouseMove } from '@organisms/ChoseWrapper/types';

const randHandData: HandType[] = ['rock', 'scissors', 'paper'];
export const randHand = () => randHandData[Math.floor(
  Math.random() * 3
)];


export const compereHands = (hand1: HandType, hand2: HandType) => {
  if (hand1 == hand2) return 0;
  switch (hand1) {
    case 'rock': return hand2 == 'scissors' ? 1 : -1;
    case 'paper': return hand2 == 'rock' ? 1 : -1;
    default: return hand2 == 'paper' ? 1 : -1;  // scissors
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

export const promptWin = (win: number|undefined) => {
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
export const getHand = (hand: HandType) => ({
  type: hand,
  img: imgByName[hand]
});

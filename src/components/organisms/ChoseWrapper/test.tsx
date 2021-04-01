import * as React from 'react';
import * as H from './helpers';
import iconRock from '@assets/icons/icon-rock.svg';
import iconPaper from '@assets/icons/icon-paper.svg';
import iconScissors from '@assets/icons/icon-scissors.svg';
import { HouseMove } from '@organisms/ChoseWrapper/types';
import { shallow } from 'enzyme';
import ChoseWrapper from './index';

const fakeSetHouseMove = (value: HouseMove) => {
  expect(value).toEqual({
    is: true,
    hand: value.hand
  });
};
const fakeSetWinHand = (value: number) => {
  expect([-1, 0, 1]).toContain(value);
};

describe('ChoseWrapper', () => {
  describe('helpers', () => {
    describe('randHand', () => {
      it('rand rock, scissors or paper', () => {
        expect(['rock', 'scissors', 'paper']).toContain(H.randHand());
      });
      it('give rock, scissors and paper', () => {
        let toUsed = ['rock', 'scissors', 'paper'];
        for(let i=0; i<1000; i++) {
          toUsed = toUsed.filter(it => it != H.randHand());
          if (toUsed.length == 0) break;
        }
        expect(toUsed.length).toBe(0);
      });
    });
    describe('compereHands', () => {
      it('gave 1 if player win', () => {
        expect(H.compereHands('rock', 'scissors')).toBe(1);
        expect(H.compereHands('scissors', 'paper')).toBe(1);
        expect(H.compereHands('paper', 'rock')).toBe(1);
      });
      it('gave -1 if bot win', () => {
        expect(H.compereHands('scissors', 'rock')).toBe(-1);
        expect(H.compereHands('paper', 'scissors')).toBe(-1);
        expect(H.compereHands('rock', 'paper')).toBe(-1);
      });
      it('gave 0 if hand is same', () => {
        expect(H.compereHands('rock', 'rock')).toBe(0);
        expect(H.compereHands('scissors', 'scissors')).toBe(0);
        expect(H.compereHands('paper', 'paper')).toBe(0);
      });
    });
    describe('promptWin', () => {
      it('give correct string on get -1, 0, 1', () => {
        expect(H.promptWin(1)).toBe('you win!');
        expect(H.promptWin(0)).toBe('draw');
        expect(H.promptWin(-1)).toBe('you lose!');
      });
      it('give "vs" when get undefined', () => {
        expect(H.promptWin(undefined)).toBe('vs');
      });
    });
    describe('getHand', () => {
      it('give correct object on get handType', () => {
        expect(H.getHand('rock')).toEqual({
          type: 'rock',
          img: iconRock
        });
        expect(H.getHand('paper')).toEqual({
          type: 'paper',
          img: iconPaper
        });
        expect(H.getHand('scissors')).toEqual({
          type: 'scissors',
          img: iconScissors
        });
      });
    });
    describe('timeoutFn', () => {
      it('correct run functions and return await -1, 0 or 1', async () => {
        expect([-1, 0, 1]).toContain(
          await H.timeoutFn(fakeSetHouseMove, fakeSetWinHand, 'rock')
        );
      });
    });
  });
  describe('component', () => {
    it('render', () => {
      shallow(<ChoseWrapper hand='rock' onClick={() => {}} />);
    });
  });
});


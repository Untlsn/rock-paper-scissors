import React, { useContext, useEffect, useState } from 'react';
import * as S from './style';
import { ChoseWrapperProps, HouseMove } from '@organisms/ChoseWrapper/types';
import * as H from './helpers';
import { ScoreContext } from '@providers/Score';
import { BorderButton, BigText, HandCircle } from '@atoms/all';

const ChoseWrapper = ({ hand, onClick }: ChoseWrapperProps) => {
  const [houseMove, setHouseMove] = useState<HouseMove>({ is: false, hand: 'rock' });
  const [winHand, setWinHand] = useState<number|undefined>();
  const { changeScore } = useContext(ScoreContext);
  useEffect(() => {
    H.timeoutFn(setHouseMove, setWinHand, hand).then(result => {
      changeScore(old => old + result);
    });
  }, []);
  return (
    <S.Wrapper>
      <S.Side>
        <S.Title>you picked</S.Title>
        <HandCircle {...H.getHand(hand)} show={winHand == 1} />
      </S.Side>
      <S.WhoWin>
        <BigText>{H.promptWin(winHand)}</BigText>
        {winHand != undefined && <BorderButton fill onClick={onClick}>play again</BorderButton>}
      </S.WhoWin>
      <S.Side>
        <S.Title>the house picked</S.Title>
        {houseMove.is
          ? <S.RotateHandCircle {...H.getHand(houseMove.hand)} show={winHand == -1} />
          : <S.HandShadow />}
      </S.Side>
    </S.Wrapper>
  );
};

export default ChoseWrapper;

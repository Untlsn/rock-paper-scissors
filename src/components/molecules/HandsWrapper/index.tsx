import React from 'react';
import * as S from './style';
import { HandType } from '@atoms/HandCircle/types';

const HandWrapper = ({ onClick }: { onClick(handName: HandType): void }) => {
  return (
    <S.Wrapper>
      <S.Triangle />
      <S.Scissors onClick={() => onClick('scissors')} />
      <S.Rock onClick={() => onClick('rock')} />
      <S.Paper onClick={() => onClick('paper')} />
    </S.Wrapper>
  );
};

export default HandWrapper;

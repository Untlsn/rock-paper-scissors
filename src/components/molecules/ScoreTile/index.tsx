import React from 'react';
import * as S from './style';

const ScoreTile = ({ children }: { children: number }) => {
  return (
    <S.Wrapper>
      <S.ScoreText>score</S.ScoreText>
      <S.ScoreNumber>{children}</S.ScoreNumber>
    </S.Wrapper>
  );
};

export default ScoreTile;

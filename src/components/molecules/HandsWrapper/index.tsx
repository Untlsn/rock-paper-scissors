import React from 'react';
import * as S from './style';




const HandWrapper = () => {
  return (
    <S.Wrapper>
      <S.Triangle />
      <S.Scissors/>
      <S.Rock />
      <S.Paper />
    </S.Wrapper>
  );
};

export default HandWrapper;

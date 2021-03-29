import React from 'react';
import * as S from './style';
import BigText from '@atoms/BigText';

const Title = () => {
  return (
    <S.Wrapper>
      <BigText>rock</BigText>
      <BigText>paper</BigText>
      <BigText>scissors</BigText>
    </S.Wrapper>
  );
};

export default Title;

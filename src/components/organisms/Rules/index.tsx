import React from 'react';
import * as S from './style';
import rulesImg from '@assets/icons/image-rules.svg';
import { useBoolState } from '@hooks/all';

const Rules = () => {
  const [see, changeSee] = useBoolState();
  return (
    <>
      <S.Background see={see}>
        <S.Wrapper>
          <S.Nav>
            <S.BigText>rules</S.BigText>
            <S.XButton onClick={() => changeSee(false)}/>
          </S.Nav>
          <S.Img src={rulesImg} />
        </S.Wrapper>
      </S.Background>
      <S.BorderButton
        onClick={() => changeSee()}>rules</S.BorderButton>
    </>
  );
};

export default Rules;

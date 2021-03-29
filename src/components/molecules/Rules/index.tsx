import React from 'react';
import * as S from './style';
import rulesImg from '@assets/icons/image-rules.svg';

const Rules = ({ see, changeSee }: { see: boolean, changeSee: (force?: boolean) => void }) => {
  return (
    <S.Background see={see}>
      <S.Wrapper>
        <S.Nav>
          <S.BigText>rules</S.BigText>
          <S.XButton onClick={() => changeSee(false)}/>
        </S.Nav>
        <S.Img src={rulesImg} />
      </S.Wrapper>
    </S.Background>
  );
};

export default Rules;

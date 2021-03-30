import React from 'react';
import * as S from './style';
import { HandCircleProps } from '@atoms/HandCircle/types';

const HandCircle = ({ type, img, show, ...rest }: HandCircleProps) => {
  return (
    <S.SuperWrapper {...rest}>
      <S.Wrapper type={type}>
        <S.HardLight show={show} />
        <S.Image src={img} />
      </S.Wrapper>
    </S.SuperWrapper>
  );
};

export default HandCircle;

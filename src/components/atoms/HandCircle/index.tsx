import React from 'react';
import * as S from './style';
import { HandCircleProps } from '@atoms/HandCircle/types';

const HandCircle = ({ type, img, className }: HandCircleProps) => {
  return (
    <div className={className}>
      <S.Wrapper type={type}>
        <S.Image src={img} />
      </S.Wrapper>
    </div>
  );
};

export default HandCircle;

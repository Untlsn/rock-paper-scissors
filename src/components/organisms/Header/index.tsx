import React, { useContext } from 'react';
import * as S from './style';
import Title from '@molecules/Title';
import ScoreTile from '@molecules/ScoreTile';
import { ScoreContext } from '@providers/Score';

const Header = () => {
  const { score } = useContext(ScoreContext);

  return (
    <S.Wrapper>
      <Title />
      <ScoreTile>{score}</ScoreTile>
    </S.Wrapper>
  );
};

export default Header;

import React from 'react';
import * as S from './style';
import Rules from '@molecules/Rules';
import { useBoolState } from '@hooks/all';

const MainView = () => {
  const [seeRules, changeSeeRules] = useBoolState();
  return (
    <>
      <Rules see={seeRules} changeSee={changeSeeRules} />
      <S.Wrapper />
      <S.BorderButton
        onClick={() => changeSeeRules(true)}>rules</S.BorderButton>
    </>
  );
};

export default MainView;

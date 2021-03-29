import React from 'react';
import * as S from './style';
import Rules from '@organisms/Rules';
import Header from '@organisms/Header';

const MainView = () => {
  return (
    <>
      <Rules />
      <S.CenterFlex>
        <Header />
      </S.CenterFlex>
    </>
  );
};

export default MainView;

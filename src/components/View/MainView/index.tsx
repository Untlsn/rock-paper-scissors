import React from 'react';
import * as S from './style';
import Rules from '@organisms/Rules';
import Header from '@organisms/Header';
import HandWrapper from '@molecules/HandsWrapper';

const MainView = () => {
  return (
    <>
      <Rules />
      <S.CenterFlex>
        <Header />
        <HandWrapper />
      </S.CenterFlex>
    </>
  );
};

export default MainView;

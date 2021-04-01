import React, { useState } from 'react';
import * as S from './style';
import Rules from '@organisms/Rules';
import Header from '@organisms/Header';
import HandWrapper from '@molecules/HandsWrapper';
import { ChoseStateType } from '@view/MainView/types';
import ChoseWrapper from '@organisms/ChoseWrapper';

const MainView = () => {
  const [chose, setChose] = useState<ChoseStateType>({ is: false, hand: 'rock' });
  return (
    <>
      <Rules />
      <S.CenterFlex>
        <Header />
        {chose.is
          ? <ChoseWrapper hand={chose.hand} onClick={() => setChose({ is: false, hand: 'rock' })}/>
          : <HandWrapper onClick={(hand) => setChose({ is: true, hand })}/>
        }
      </S.CenterFlex>
    </>
  );
};

export default MainView;

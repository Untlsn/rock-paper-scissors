import React from 'react';
import { StyleProvider } from '@providers/all';
import MainView from '@view/MainView';
import ScoreProvider from '@providers/Score';

const barlowSemiCondensedUrl = 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[barlowSemiCondensedUrl]}>
      <ScoreProvider>
        <MainView />
      </ScoreProvider>
    </StyleProvider>
  );
};

export default Home;

import React from 'react';
import { StyleProvider } from '@providers/all';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[robotoUrl]}>
      <div>Hello World!</div>
    </StyleProvider>
  );
};

export default Home;

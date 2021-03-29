import React from 'react';
import { StyleProvider } from '@providers/all';

const barlowSemiCondensedUrl = 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[barlowSemiCondensedUrl]}>
      <div>Hello World!</div>
    </StyleProvider>
  );
};

export default Home;

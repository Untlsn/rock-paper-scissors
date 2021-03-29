import React, { useState } from 'react';

export const ScoreContext = React.createContext<{
  score: number,
  changeScore: React.Dispatch<React.SetStateAction<number>>
}>({
  score: 0,
  changeScore: () => {}
});

const ScoreProvider = ({ children }: { children: any }) => {
  const [score, changeScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, changeScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;

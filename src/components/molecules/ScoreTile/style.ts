import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  border-radius: .5em;
  padding: 1em 3em;
  margin: 1em;
`;
export const ScoreText = styled.div`
  text-transform: uppercase;
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.scoreText};
  letter-spacing: .1em;
  transform: scaleY(.9);
`;
export const ScoreNumber = styled.div`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 4em;
  text-align: center;
  font-weight: bolder;
  line-height: .9em;
`;

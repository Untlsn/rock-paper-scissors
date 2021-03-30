import styled from 'styled-components';
import HandCircleBody from '@atoms/HandCircle';
import bgTriangle from '@assets/icons/bg-triangle.svg';
import iconPaper from '@assets/icons/icon-paper.svg';
import iconRock from '@assets/icons/icon-rock.svg';
import iconScissors from '@assets/icons/icon-scissors.svg';


export const Wrapper = styled.div`
  left: 30em;
  top: 10em;
  position: relative;
  width: 20em;
  height: 20em;
`;
export const Triangle = styled.img.attrs({ src: bgTriangle, alt: '' })`
  position: absolute;
  top: 0;
  left: 0;
`;
const HandCircle = styled(HandCircleBody)`
  position: absolute;
`;
export const Paper = styled(HandCircle).attrs({ type: 'paper', img: iconPaper })`
  top: -5em;
  left: -5em;
`;
export const Scissors = styled(HandCircle).attrs({ type: 'scissors', img: iconScissors })`
  top: -5em;
  right: -5em;
`;
export const Rock = styled(HandCircle).attrs({ type: 'rock', img: iconRock })`
  bottom: -2em;
  left: 3.5em;
`;


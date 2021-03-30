import styled, { keyframes } from 'styled-components';
import HandCircle from '@atoms/HandCircle';


export const Wrapper = styled.div`
  display: flex;
  gap: 20em;
  position: relative;
  animation: ${keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
  `} .5s ease-in-out;
`;
export const Side = styled.div`
  text-align: center;
`;

export const HandShadow = styled.div`
  background-color: rgba(0,0,0,.1);
  height: 10em;
  width: 10em;
  border-radius: 20em;
  margin-top: 6em;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3em;
`;
const rotateAnimation = keyframes`
  0% { 
    transform: rotateX(0deg) scale(.2);
  }
  25% { 
    transform: rotateX(90deg) scale(.3);
  }
  50% { 
    transform: rotateX(180deg) scale(.50);
  }
  75% { 
    transform: rotateX(270deg) scale(.8);
  }
  100% { 
    transform: rotateX(360deg) scale(1);
  }
`;
export const RotateHandCircle = styled(HandCircle)`
  animation: ${rotateAnimation} .5s linear;
`;
export const WhoWin = styled.div`
  z-index: 10;
  height: 1em;
  width: 15em;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  span {
    font-size: 3em;
    text-shadow: rgba(0,0,0,.1) -.2em .2em .2em;
  }
`;

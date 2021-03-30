import styled, { css, keyframes } from 'styled-components';
import { HandType } from '@atoms/HandCircle/types';

const absoluteCenter = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
export const SuperWrapper = styled.button`
  background: none;
  border: none;
  font-size: inherit;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
export const Wrapper = styled.div<{ type: HandType }>`
  position: relative;
  height: 10em;
  width: 10em;
  font-size: 1.2em;
  z-index: 5;
  
  &::before, &::after {
    ${absoluteCenter};
    content: '';
    display: block;
    border-radius: 100%;
  }
  &::before {
    height: 100%;
    width: 100%;
    background: radial-gradient(
      ${({ theme, type }) => theme.colors.gradient[type][0]} 80%,
      ${({ theme, type }) => theme.colors.gradient[type][1]} 100%
    );
    box-shadow: ${({ theme, type }) => theme.colors.shadows[type]} 0 .5em 0 0;
  }
  &::after {
    height: 70%;
    width: 70%;
    background-color: white;
    box-shadow: #babfd2 0 -.5em 0 0;
  }
`;

export const Image = styled.img.attrs({ alt: '' })`
  ${absoluteCenter};
  position: absolute;
  z-index: 1;
`;

export const HardLight = styled.div<{ show?: boolean }>`
  position: absolute;
  top:   -10em;
  left:  -10em;
  height: 30em;
  width:  30em;
  border-radius: 100%;
  z-index: -1;
  background: radial-gradient(
    closest-side,
    rgba(255,255,255, .5) 0%, rgba(255,255,255, .5) 50%,
    rgba(255,255,255, .2) 50%, rgba(255,255,255, .2) 70%,
    rgba(255,255,255, .05) 70%, rgba(255,255,255, .05) 100%
  );
  transform: scale(0);
  ${({ show }) => show && css`
    animation: ${keyframes`
      from { 
        transform: scale(0);
        opacity: 0;
      }
      to { 
        transform: scale(1);
        opacity: 1;
      }
    `} 1s linear forwards;
  `}
`;

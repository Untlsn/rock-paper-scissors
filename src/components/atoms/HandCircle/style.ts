import styled, { css } from 'styled-components';
import { colorTypes } from '@atoms/HandCircle/types';

const absoluteCenter = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Wrapper = styled.div<{ type: colorTypes }>`
  position: relative;
  height: 10em;
  width: 10em;
  font-size: 1.2em;
  
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

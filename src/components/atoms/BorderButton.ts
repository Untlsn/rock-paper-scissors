import styled, { css } from 'styled-components';

const BorderButton = styled.div<{ fill?: boolean }>`
  border: white solid .1em;
  text-transform: uppercase;
  padding: .5em 3em;
  border-radius: .5em;
  font-size: 1.3em;
  ${({ fill, theme }) => fill 
    ? css`
      color: ${theme.colors.headerOutline};
      background: white;
    `
    : css`
      color: white;
      background: transparent;
      transition: filter .2s;
      &:hover {
        filter: brightness(.5);
      }
    `
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gradient.rock[0]};
  }
`;
export default BorderButton;

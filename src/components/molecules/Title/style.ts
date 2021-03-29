import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  font-size: 1.3em;
  &>* {
    &:first-child, &:last-child {
      position: relative;
    }
    &:first-child {
      bottom: -.4em;
    }
    &:last-child {
      top: -.4em;
    }
  }
`;

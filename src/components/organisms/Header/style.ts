import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 1em;
  border: .2em solid ${({ theme }) => theme.colors.headerOutline};
  width: 70vw;
  
  position: relative;
  top: 3em;
  margin-bottom: 10em;
  &:hover {
    cursor: context-menu;
  }
  
  @media (orientation: portrait) {
    font-size: 1.5em;
    width: 90vw;
  }
`;

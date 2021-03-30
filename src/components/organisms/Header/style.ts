import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 1em;
  border: .2em solid ${({ theme }) => theme.colors.headerOutline};
  width: 50em;
  
  position: relative;
  top: 3em;
  margin-bottom: 10em;
  &:hover {
    cursor: context-menu;
  }
`;

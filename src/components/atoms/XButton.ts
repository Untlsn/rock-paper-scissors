import styled from 'styled-components';

const XButton = styled.div`
  position: relative;
  width: 0;
  height: 0;
  opacity: .5;
  
  &::before, &::after {
    content: '';
    position: absolute;
    left: -1em;
    top: 1em;
    height: .2em;
    width: 1.5em;
    display: block;
    background-color: ${({ theme }) => theme.colors.headerOutline};
    transition: filter .2s;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
  
  &:hover {
    cursor: pointer;
    &::before, &::after {
      filter: brightness(1.5);
    }
  }
`;
export default XButton;

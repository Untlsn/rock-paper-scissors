import styled from 'styled-components';

const BorderButton = styled.div`
  border: white solid .1em;
  color: white;
  text-transform: uppercase;
  background: transparent;
  padding: .5em 3em;
  border-radius: .5em;
  font-size: 1.3em;
  transition: filter .2s;
  &:hover {
    cursor: pointer;
    filter: brightness(.5);
  }
`;
export default BorderButton;

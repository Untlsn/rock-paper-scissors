import styled from 'styled-components';
import BorderButtonBody from '@atoms/BorderButton';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    ${({ theme }) => theme.colors.gradient.radialGradient[0]},
    ${({ theme }) => theme.colors.gradient.radialGradient[1]}
  );
`;
export const BorderButton = styled(BorderButtonBody)`
  position: absolute;
  bottom: 1em;
  right: 1em;  
`;

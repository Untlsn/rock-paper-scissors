import styled from 'styled-components';
import BigTextBody from '@atoms/BigText';
export { default as XButton } from '@atoms/XButton';

export const Background = styled.div<{ see: boolean }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  
  opacity: ${({ see }) => see ? 1 : 0};
  transition: opacity .5s;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 2em;
  border-radius: 1em;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;
`;
export const Img = styled.img.attrs({ alt: '' })`
  padding: 0 1em;
`;
export const BigText = styled(BigTextBody)`
  color: ${({ theme }) => theme.colors.darkText};
`;

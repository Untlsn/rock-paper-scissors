import styled, { css } from 'styled-components';
import BigTextBody from '@atoms/BigText';
import BorderButtonBody from '@atoms/BorderButton';
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
  opacity: 0;
  z-index: -1;
  transition: opacity .5s;
  ${({ see }) => see && css`
    opacity: 1;
    z-index: 0;
  `}
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
export const BorderButton = styled(BorderButtonBody)`
  position: absolute;
  bottom: 1em;
  right: 1em;  
`;

import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  height: 400px;
  transform: translate(-50%, -50%);

  border-radius: 24px;

  background: #fff;
`;

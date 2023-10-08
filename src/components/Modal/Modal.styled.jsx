import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled(motion.div)`
  width: 541px;
  height: 400px;
  border-radius: 24px;

  background: #fff;
`;

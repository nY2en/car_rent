import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Li = styled.li`
  margin: 24px 14px;
`;

export const Img = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-bottom: 14px;

  background: aqua;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(${props => props.img}), lightgray 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 14px;
`;

export const ButtonSvgWrapper = styled(motion.button)`
  position: absolute;
  top: 14px;
  right: 5%;
  width: 18px;
  height: 18px;
`;

export const Svg = styled(motion.svg)`
  width: 18px;
  height: 18px;

  stroke: #fff;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
  margin-bottom: 8px;
`;

export const P = styled.p`
  margin-bottom: ${props => (props.mg_b ? props.mg_b : 0)}px;

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  color: #121417;
`;

export const Span = styled.span`
  font-weight: ${props => props.fw};

  color: #3470ff;
`;

export const ModalContent = styled.div`
  padding: 40px;
`;

export const Description = styled.p`
  margin-bottom: ${props => props.mg_b}px;
  width: 461px;

  font-size: 14px;
  font-weight: ${props => (props.fw ? props.fw : 400)};
  line-height: 142.857%;

  color: #121417;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  max-width: ${props => props.width}px;
  flex-wrap: wrap;
  margin: -2px -6px;

  margin-bottom: ${props => props.mg_b}px;
`;

export const LiInfo = styled.li`
  position: relative;
  margin: 2px 6px;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  color: rgba(18, 20, 23, 0.5);

  :not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -6px;
      width: 1px;
      height: 16px;

      background: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const LiRental = styled.li`
  padding: 7px 14px;
  margin: 6px;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;

  color: #363535;
`;

export const A = styled.a`
  padding: 12px 50px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;

  border-radius: 12px;

  background: #3470ff;
  color: #fff;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    background: #0b44cd;
  }
`;

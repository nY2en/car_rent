import styled from '@emotion/styled';

export const Button = styled.button`
  padding-top: ${props => props.pv}px;
  padding-bottom: ${props => props.pv}px;
  padding-left: ${props => props.ph}px;
  padding-right: ${props => props.ph}px;
  margin-right: ${props => (props.mg_r ? props.mg_r : 0)}px;
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;

  border: none;
  border-radius: 12px;

  background: #3470ff;
  color: #fff;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

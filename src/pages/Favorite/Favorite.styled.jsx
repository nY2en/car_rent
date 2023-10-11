import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 128px;
`;

export const Div = styled.div`
  width: 500px;
  margin: 100px auto;
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin: 32px auto;
  padding: 14px 20px;
  width: 200px;

  font-size: 18px;
  font-weight: 600;
  line-height: 142.857%;

  border-radius: 12px;
  
  background: #4e93ba;
  color: #fff;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

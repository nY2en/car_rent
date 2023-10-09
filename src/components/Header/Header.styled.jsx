import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background: #3470ff;
  box-shadow: rgba(0, 0, 0, 0.4) 4px 7px 10px;
`;

export const Nav = styled.nav`
  display: flex;
  width: 1440px;
  padding: 24px 128px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  color: #fff;
  font-size: 24;
  font-weight: 700;

  &.active {
    color: #ff00ff;
  }
`;

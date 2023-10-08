import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  padding: 24px 128px;

  background: #3470ff;
`;

export const Nav = styled.nav`
  display: flex;
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

  &.active {
    color: lightgray;
  }
`;

import styled from '@emotion/styled';
import img from 'assets/img/background.jpg';
import { NavLink } from 'react-router-dom';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px 128px;

  background: #4e93ba;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Div = styled.div`
  width: 980px;
  margin: 120px auto;
`;

export const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;

  color: #fff;
`;

export const StyledLink = styled(NavLink)`
  color: #4e93ba;

   {
    -webkit-animation: pulsate 3s ease-out;
    -webkit-animation-iteration-count: infinite;
    opacity: 0.5;
  }

  @-webkit-keyframes {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

import {
  HeaderWrapper,
  Nav,
  Ul,
  Li,
  StyledLink,
  LogoStyled,
  Svg,
} from './Header.styled';

import sprite from 'assets/sprite.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <LogoStyled to={'/'}>
          SexyCars
          <Svg>
            <use href={sprite + '#flame'}></use>
          </Svg>
        </LogoStyled>

        <Ul>
          <Li>
            <StyledLink to={'/'}>Home</StyledLink>
          </Li>

          <Li>
            <StyledLink to={'/catalog'}>Catalog</StyledLink>
          </Li>

          <Li>
            <StyledLink to={'/favorites'}>Favorite</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

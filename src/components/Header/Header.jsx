import { HeaderWrapper, Nav, Ul, Li, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <StyledLink to={'/'}>Logo</StyledLink>

        <Ul>
          <Li>
            <StyledLink to={'/'}>Home</StyledLink>
          </Li>

          <Li>
            <StyledLink to={'/catalog'}>Catalog</StyledLink>
          </Li>

          <Li>
            <StyledLink to={'/favorite'}>Favorite</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

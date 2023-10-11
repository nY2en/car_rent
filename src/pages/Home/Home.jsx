import { PageWrapper } from './Home.styled';
import { Div, H1, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Div>
        <H1>
          Discover the world on wheels with our{' '}
          <StyledLink to="/catalog">cars</StyledLink>
        </H1>
      </Div>
    </PageWrapper>
  );
};

export default Home;

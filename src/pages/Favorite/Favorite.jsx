import { useSelector } from 'react-redux';
import CarList from 'components/CarList';
import { selectFavoriteCars } from 'redux/carsRentSlice/selectors';
import { PageWrapper, Div, H1, StyledLink } from './Favorite.styled';
import img from 'assets/img/empty_cart.jpg';

const Favorite = () => {
  const favorite = useSelector(selectFavoriteCars);

  return (
    <>
      {favorite.length > 0 ? (
        <PageWrapper>
          <CarList data={favorite} />
        </PageWrapper>
      ) : (
        <Div>
          <img src={img} alt="empty cart" />
          <H1>Oops, nothing here</H1>
          <StyledLink to="/catalog">Go check catalog</StyledLink>
        </Div>
      )}
    </>
  );
};

export default Favorite;

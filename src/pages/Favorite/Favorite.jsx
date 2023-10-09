import { useSelector } from 'react-redux';
import CarList from 'components/CarList';
import { selectFavoriteCars } from 'redux/carsRentSlice/selectors';

const Favorite = () => {
  const favorite = useSelector(selectFavoriteCars);

  return (
    <>
      {favorite.length > 0 ? (
        <CarList data={favorite} />
      ) : (
        <div>favorite list is empty</div>
      )}
    </>
  );
};

export default Favorite;

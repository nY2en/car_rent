import { useSelector } from 'react-redux';
import CarList from 'components/CarList';
import { selectFavoriteCars } from 'redux/favoriteCarsSlice/selectors';

const Favorite = () => {
  const data = useSelector(selectFavoriteCars);

  return (
    <>
      {data.cars.length > 0 ? (
        <CarList data={data.cars} count={7} />
      ) : (
        <div>favorite list is empty</div>
      )}
    </>
  );
};

export default Favorite;

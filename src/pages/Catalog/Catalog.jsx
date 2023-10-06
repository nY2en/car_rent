import { useDispatch } from 'react-redux';
import API from 'redux/carsRentSlice/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  dispatch(API.fetchCars());

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Catalog
    </div>
  );
};

export default Catalog;

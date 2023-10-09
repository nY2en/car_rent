import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from 'redux/carsRentSlice/operations';
import CarList from 'components/CarList/';
import LoadMoreBtn from 'components/LoadMoreBtn';
import {
  selectCars,
  selectIsLoading,
  selectFavoriteCars,
} from 'redux/carsRentSlice/selectors';

const Catalog = () => {
  const [count, setCount] = useState(7);

  const dispatch = useDispatch();

  const data = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const favorite = useSelector(selectFavoriteCars);

  const updatedArr = [...data];

  if (favorite.length > 0) {
    for (const key of favorite) {
      const idx = data.findIndex(el => el.id === key.id);

      updatedArr.splice(idx, 1, key);
    }
  }

  useEffect(() => {
    dispatch(API.fetchCars());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <>
          <CarList data={updatedArr} count={count} />
          <LoadMoreBtn setCount={setCount} />
        </>
      )}
    </>
  );
};

export default Catalog;

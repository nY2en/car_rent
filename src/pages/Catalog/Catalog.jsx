import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import API from 'redux/carsRentSlice/operations';
import CarList from 'components/CarList/';
import LoadMoreBtn from 'components/LoadMoreBtn';
import select from 'redux/carsRentSlice/selectors';

const Catalog = () => {
  const [count, setCount] = useState(7);

  const dispatch = useDispatch();

  const data = useSelector(select.Cars);
  const isLoading = useSelector(select.IsLoading);

  useEffect(() => {
    dispatch(API.fetchCars());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <>
          <CarList data={data} count={count} />
          <LoadMoreBtn setCount={setCount} />
        </>
      )}
    </>
  );
};

export default Catalog;

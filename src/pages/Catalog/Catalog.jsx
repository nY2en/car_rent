import { useDispatch } from 'react-redux';
import API from 'redux/carsRentSlice/operations';
import CarList from 'components/CarList/CarList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import LoadMoreBtn from 'components/LoadMoreBtn';

import { useEffect } from 'react';

const Catalog = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.carsRent.cars);

  const [count, setCount] = useState(7);

  useEffect(() => {
    dispatch(API.fetchCars());
  }, [dispatch]);

  return (
    <>
      <CarList data={data} count={count} />
      <LoadMoreBtn setCount={setCount} />
    </>
  );
};

export default Catalog;

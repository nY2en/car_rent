import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import API from 'redux/carsRentSlice/operations';
import CarList from 'components/CarList/CarList';
import LoadMoreBtn from 'components/LoadMoreBtn';
import select from 'redux/carsRentSlice/selectors';

import { useEffect } from 'react';

const Catalog = () => {
  const [count, setCount] = useState(7);

  const dispatch = useDispatch();

  const data = useSelector(select.Cars);

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

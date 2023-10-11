import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from 'redux/carsRentSlice/operations';
import CarList from 'components/CarList/';
import LoadMoreBtn from 'components/LoadMoreBtn';
import {
  selectFilterMake,
  selectIsLoading,
  selectVisibleCars,
} from 'redux/carsRentSlice/selectors';
import { PageWrapper } from './Catalog.styled';
import Filter from 'components/Filter';

const Catalog = () => {
  const [count, setCount] = useState(7);

  const dispatch = useDispatch();

  const filter = useSelector(selectFilterMake);

  console.log(filter);

  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(API.fetchCars());
  }, [dispatch]);

  return (
    <PageWrapper>
      {!isLoading && (
        <>
          <Filter />
          <CarList data={cars} count={count} />
          {count < cars.length - 1 && <LoadMoreBtn setCount={setCount} />}
        </>
      )}
    </PageWrapper>
  );
};

export default Catalog;

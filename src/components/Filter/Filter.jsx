import Select from 'react-select';

import brands from 'makes.json';
import { useState } from 'react';
import {
  filterMake,
  filterPrice,
  filterMileage,
} from 'redux/carsRentSlice/actions';

import { useDispatch } from 'react-redux';

import { FilterWrapper, stylesMake, stylesPrice, Input } from './Filter.styled';

const prices = [];
for (let index = 1; index < 13; index += 1) {
  const price = index * 10;
  prices.push({ value: price, label: price });
}

const makes = brands.map(el => {
  return { label: el, value: el };
});

const Filter = () => {
  const [reset, setReset] = useState(false);

  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <Select
        isClearable={true}
        placeholder="Enter the text"
        options={makes}
        styles={stylesMake}
        onChange={e => {
          if (!e) {
            dispatch(filterMake(''));
            return;
          }

          dispatch(filterMake(e.value));
        }}
      ></Select>

      <Select
        styles={stylesPrice}
        isClearable={true}
        placeholder="To $"
        options={prices}
        onChange={e => {
          if (!e) {
            dispatch(filterPrice(1000));
            return;
          }

          dispatch(filterPrice(e.value));
        }}
      ></Select>
      <form
        onSubmit={e => {
          e.preventDefault();
          let from = e.target.elements.from.value;
          let to = e.target.elements.to.value;

          if (reset) {
            e.target.elements.from.value = '';
            e.target.elements.to.value = '';
            dispatch(filterMileage({ from: '', to: '100000' }));
            setReset(false);
            return;
          }

          if (from === '' && to === '') {
            dispatch(filterMileage({ from: '', to: '100000' }));
            return;
          }

          if (to === '') {
            to = 10000;
          }

          const mileage = {
            from,
            to,
          };

          dispatch(filterMileage(mileage));
        }}
      >
        <Input left placeholder="From" name="from" />
        <Input placeholder="To" name="to" />

        <button>Submit</button>

        <button
          onClick={() => {
            setReset(true);
          }}
        >
          Reset
        </button>
      </form>
    </FilterWrapper>
  );
};

export default Filter;

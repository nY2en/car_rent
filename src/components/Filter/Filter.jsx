import Select from 'react-select';

import brands from 'makes.json';

import { filterMake, filterPrice } from 'redux/carsRentSlice/actions';

import { useDispatch } from 'react-redux';

import { stylesMake, stylesPrice } from './Filter.styled';

const prices = [];
for (let index = 1; index < 13; index += 1) {
  const price = index * 10;
  prices.push({ value: price, label: price });
  console.log(prices);
}

const makes = brands.map(el => {
  return { label: el, value: el };
});

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        marginBottom: '24px',
        height: '80px',
      }}
    >
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
    </div>
  );
};

export default Filter;

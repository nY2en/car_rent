import Select from 'react-select';

import brands from 'makes.json';

import { filterMake, filterPrice } from 'redux/carsRentSlice/actions';

import { useDispatch } from 'react-redux';
const prices = [];
for (let index = 1; index < 13; index += 1) {
  const price = index * 10;
  prices.push({ value: price, label: price });
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
      }}
    >
      <div style={{ width: '225px' }}>
        <Select
          isClearable={true}
          placeholder="Enter the text"
          options={makes}
          onChange={e => {
            if (!e) {
              dispatch(filterMake(''));
              return;
            }

            dispatch(filterMake(e.value));
          }}
        ></Select>
      </div>

      <div>
        <Select
          styles={{ width: '225px' }}
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
    </div>
  );
};

export default Filter;

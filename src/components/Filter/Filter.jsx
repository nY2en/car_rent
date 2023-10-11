import Select from 'react-select';

import brands from 'makes.json';

import { filterMake } from 'redux/carsRentSlice/actions';

import { useDispatch } from 'react-redux';

const makes = brands.map(el => {
  return { label: el, value: el.toLowerCase() };
});

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ width: '300px' }}>
      <Select
        isClearable={true}
        name="color"
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
  );
};

export default Filter;

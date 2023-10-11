import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {
  filterMake,
  filterPrice,
  filterMileage,
} from 'redux/carsRentSlice/actions';
import brands from 'makes.json';
import Btn from 'components/Btn';
import {
  FilterWrapper,
  stylesMake,
  stylesPrice,
  Input,
  P,
} from './Filter.styled';
import { generatePriceList } from 'utils';

const MAKES = brands.map(el => ({ label: el, value: el }));
const PRICES = generatePriceList(13);

const Filter = () => {
  const [shouldReset, setShouldReset] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(filterMake(''));
      dispatch(filterPrice(1000));
      dispatch(filterMileage({ from: '', to: '100000' }));
    };
  }, [dispatch]);

  const handleMakeSelect = e => {
    if (!e) {
      dispatch(filterMake(''));
      return;
    }

    dispatch(filterMake(e.value));
  };

  const handlePriceSelect = e => {
    if (!e) {
      dispatch(filterPrice(1000));
      return;
    }

    dispatch(filterPrice(e.value));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    let from = e.target.elements.from.value;
    let to = e.target.elements.to.value;

    if (shouldReset) {
      e.target.elements.from.value = '';
      e.target.elements.to.value = '';
      dispatch(filterMileage({ from: '', to: '100000' }));
      setShouldReset(false);
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
  };

  return (
    <FilterWrapper>
      <div>
        <P>Car brand</P>
        <Select
          isClearable={true}
          placeholder="Enter the text"
          options={MAKES}
          styles={stylesMake}
          onChange={handleMakeSelect}
        ></Select>
      </div>
      <div>
        <P>Price/ 1 hour</P>
        <Select
          styles={stylesPrice}
          isClearable={true}
          placeholder="To $"
          options={PRICES}
          onChange={handlePriceSelect}
        ></Select>
      </div>
      <div>
        <P>Сar mileage / km</P>
        <form style={{ marginTop: '16px' }} onSubmit={handleFormSubmit}>
          <Input left placeholder="From" name="from" />
          <Input placeholder="To" name="to" />
          <Btn ph={44} pv={14} title={'Search'} mg_r={18} />

          <Btn
            title={'Reset'}
            ph={44}
            pv={14}
            onClick={() => {
              setShouldReset(true);
            }}
          />
        </form>
      </div>
    </FilterWrapper>
  );
};

export default Filter;

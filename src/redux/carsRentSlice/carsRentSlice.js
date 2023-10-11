import { createSlice } from '@reduxjs/toolkit';
import API from './operations';
import { addCar, removeCar, filterMake } from './actions';

const carsRentSlice = createSlice({
  name: 'carsRent',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
    favorite: [],
    filter: {
      make: '',
    },
  },
  extraReducers: builder => {
    builder.addCase(API.fetchCars.pending, state => {
      state.error = false;
      state.isLoading = true;
    });

    builder.addCase(API.fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    });

    builder.addCase(API.fetchCars.rejected, state => {
      state.error = true;
      state.isLoading = false;
    });

    builder.addCase(addCar, (state, action) => {
      state.favorite.push(action.payload);
    });

    builder.addCase(removeCar, (state, action) => {
      const indx = state.favorite.findIndex(el => el.id === action.payload);

      state.favorite.splice(indx, 1);
    });

    builder.addCase(filterMake, (state, action) => {
      state.filter.make = action.payload;
    });
  },
});

export default carsRentSlice;

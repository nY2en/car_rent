import { createSlice } from '@reduxjs/toolkit';
import API from './operations';

const carsRentSlice = createSlice({
  name: 'carsRent',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [API.fetchCars.pending]: state => {
      state.error = false;
      state.isLoading = true;
    },

    [API.fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    },
    [API.fetchCars.rejected]: state => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export default carsRentSlice;

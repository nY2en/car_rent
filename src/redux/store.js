import { configureStore } from '@reduxjs/toolkit';

import carsRentSlice from './carsRentSlice/carsRentSlice';

const store = configureStore({
  reducer: {
    carsRent: carsRentSlice.reducer,
  },
});

export default store;

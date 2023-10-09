import { createSlice } from '@reduxjs/toolkit';
import { addCar, removeCar } from './actions';

const favoriteCarsSlice = createSlice({
  name: 'favoriteCars',
  initialState: {
    cars: [],
  },
  extraReducers: builder => {
    builder.addCase(addCar, (state, action) => {
      state.cars.push(action.payload);
    });
    builder.addCase(removeCar, (state, action) => {
      const indx = state.cars.findIndex(el => el.id === action.payload);

      state.cars.splice(indx, 1);
    });
  },
});

export default favoriteCarsSlice;

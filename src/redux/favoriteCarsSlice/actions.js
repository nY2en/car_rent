const { createAction } = require('@reduxjs/toolkit');

export const addCar = createAction('favoriteCars/addCar');

export const removeCar = createAction('favoriteCars/removeCar');

export const selectCars = state => state.carsRent.cars;

export const selectIsLoading = state => state.carsRent.isLoading;

export const selectFavoriteCars = state => state.carsRent.favorite;

export const selectFilterMake = state => state.carsRent.filter.make;

export const selectVisibleCars = state => {
  let cars = selectCars(state);
  let favorite = selectFavoriteCars(state);
  const filteredValue = selectFilterMake(state);

  let mutedCars = [...cars];

  for (const key of favorite) {
    const idx = mutedCars.findIndex(el => el.id === key.id);

    mutedCars.splice(idx, 1, key);
  }

  const filtered = mutedCars.filter(el => el.make.includes(filteredValue));

  return filtered;
};

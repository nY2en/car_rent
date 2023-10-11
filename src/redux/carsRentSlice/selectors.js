export const selectCars = state => state.carsRent.cars;

export const selectIsLoading = state => state.carsRent.isLoading;

export const selectFavoriteCars = state => state.carsRent.favorite;

export const selectFilterMake = state => state.carsRent.filter.make;

export const selectFilterPrice = state => state.carsRent.filter.price;

export const selectVisibleCars = state => {
  let cars = selectCars(state);
  let favorite = selectFavoriteCars(state);
  const filteredMake = selectFilterMake(state);
  const filteredPrice = selectFilterPrice(state);

  let mutedCars = [...cars];

  for (const key of favorite) {
    const idx = mutedCars.findIndex(el => el.id === key.id);

    mutedCars.splice(idx, 1, key);
  }

  const filtered = mutedCars
    .filter(el => el.make.includes(filteredMake))
    .filter(el => el.rentalPrice.slice(1, 4) <= filteredPrice);

  return filtered;
};

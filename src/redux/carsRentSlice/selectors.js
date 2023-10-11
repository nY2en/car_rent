export const selectCars = state => state.carsRent.cars;

export const selectIsLoading = state => state.carsRent.isLoading;

export const selectFavoriteCars = state => state.carsRent.favorite;

export const selectFilterMake = state => state.carsRent.filter.make;

export const selectFilterPrice = state => state.carsRent.filter.price;

export const selectFilterMileage = state => state.carsRent.filter.mileage;

export const selectVisibleCars = state => {
  let cars = selectCars(state);
  let favorite = selectFavoriteCars(state);
  const make = selectFilterMake(state);
  const price = selectFilterPrice(state);
  const mileage = selectFilterMileage(state);

  let mutedCars = [...cars];

  for (const key of favorite) {
    const idx = mutedCars.findIndex(el => el.id === key.id);

    mutedCars.splice(idx, 1, key);
  }

  const filtered = mutedCars
    .filter(el => el.make.includes(make))
    .filter(el => el.rentalPrice.slice(1, 4) <= price)
    .filter(el => el.mileage >= mileage.from && el.mileage <= mileage.to);

  return filtered;
};

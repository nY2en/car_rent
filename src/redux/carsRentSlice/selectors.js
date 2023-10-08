const Cars = state => state.carsRent.cars;

const IsLoading = state => state.carsRent.isLoading;

const select = { Cars, IsLoading };

export default select;

const formatMileage = data => {
  const mileage = String(data).split('');
  mileage.splice(1, 0, ',');

  return mileage.join('');
};

export default formatMileage;

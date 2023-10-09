const formatArrayData = data => {
  const arr = data.split(',');
  arr.splice(0, 1);

  return arr;
};

export default formatArrayData;

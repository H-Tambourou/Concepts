const intersection = (arr1, arr2) => {
  let arr = arr1.filter(value => arr2.includes(value));
  arr = [...new Set(arr)];
  return arr;
}

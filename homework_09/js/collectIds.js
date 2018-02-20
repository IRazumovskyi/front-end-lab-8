function collectIds(arr) {
  let filteredArr = getFilteredArray(arr, function(key) {
    return key.rating > 3;
  });
  let filteredArrId = getTransformedArray(filteredArr, function(key) {
    return key.id;
  });
  return filteredArrId;
}
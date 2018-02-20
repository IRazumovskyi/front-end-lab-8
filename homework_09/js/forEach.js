function forEach(arr, func) {
  for (let key in arr) {
    arr[key] = func(arr[key]);
  }
  return arr;
}

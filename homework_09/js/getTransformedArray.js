function getTransformedArray(arr, func) {
  let transArr = new Array();
  transArr = forEach(arr, func);
  return transArr;
}

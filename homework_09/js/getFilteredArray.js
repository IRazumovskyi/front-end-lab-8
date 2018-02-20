function getFilteredArray(arr, func) {
  let newArr = new Array();
  forEach(arr, function(arr){
    if(func(arr)){
      newArr.push(arr);
    }
  });
  return newArr;
}


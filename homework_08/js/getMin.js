function getMin(...arrays){
  let min = arguments[0];
  for(let i = 0; i< arrays.length; i++){
    if( arrays[i] < min){
      min = arrays[i];
    }
  }
  return min;
}
function getMin(...arr){
  let min = arguments[0];
  for(let i = 0; i< arguments.length; i++){
    console.log(arguments[i]);
    if( arguments[i] < min){
      min = arguments[i];
    }
  }
  return min;
}
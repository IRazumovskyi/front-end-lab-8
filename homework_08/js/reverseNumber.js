function reverseNumber(number) {
  var minus = Math.sign(number);
  var arrOfNumbers = parseInt( number.toString().split("").reverse().join(""));  
  return minus * arrOfNumbers;
}

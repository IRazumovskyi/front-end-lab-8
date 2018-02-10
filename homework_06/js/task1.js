var a = parseFloat(prompt("Enter the length of 1 side", ""));
var b = parseFloat(prompt("Enter the length of 2 side", ""));
var c = parseFloat(prompt("Enter the length of 3 side", ""));


var p = (a + b + c) / 2;
var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
var typeTriangle;
var aSquare = a*a;
var bSquare = b*b;
var cSquare = c*c;


if (a > 0 && b > 0 && c > 0) {

  if ( aSquare + bSquare == cSquare || aSquare + cSquare == bSquare || cSquare + bSquare == aSquare) {
    typeTriangle = "right triangle";
  } 
  else if (a == b && b == c) {
    typeTriangle = "equilateral triangle";
  } 
  else if (a == b || a == c || b == c){
    typeTriangle = "isosceles triangle";
  } 
  else if (a !== b && a !== c && b !== c) {
    typeTriangle = "scalene triangle";
  }  

  console.log("Triangle type is " + typeTriangle);
  console.log("Square is " + area.toFixed(2));
  
} else {
  console.log('Incorrect data');
}
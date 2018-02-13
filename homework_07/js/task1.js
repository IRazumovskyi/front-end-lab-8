var number = Number(prompt("Enter number from 1 to 20", ""));
var str = "";
if (number > 0 && number <= 20) {
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= number - i; j++) {
      str += "    ";
    }
    for (var k = 1; k <= i; k++) {
      str += "[~] ";
      if (k > 1 ) {
        str += "[~] ";
      }
    }
    str += "\n";
  }
  console.log(str);
} else {
  console.error("Incorrect!");
}
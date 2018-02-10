var oneEuro = 33.2324;
var oneUsd = 27.1240;

var amoutEuro = parseFloat(prompt("Input amount of EURO", ""));
var amoutUsd = parseFloat(prompt("Input amount of USD", ""));

if ( amoutEuro > 0 && amoutUsd > 0) {
    var euroToUah = amoutEuro * oneEuro;
    var usdToUah = amoutUsd * oneUsd;
    var euroToUsd = oneEuro / oneUsd;


    console.log(
        amoutEuro + " euros are equal " + euroToUah.toFixed(2) + " UAH , "
        + amoutUsd+  "  dollars are equal " + usdToUah.toFixed(2) +  " UAH ,"+ 
        " one euro is equal " + euroToUsd.toFixed(2) + " dollars"
    );

} else {
  console.log("Incorrect data");
}

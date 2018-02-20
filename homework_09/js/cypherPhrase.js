function cypherPhrase(arr, str) {
  str = str.split("");

  let newStr = getTransformedArray(str, function(element) {
    for (let key in arr) {
      if (element === key) {
        return arr[key];
      }
    }
    return element;
  });
  return newStr.join("");
}

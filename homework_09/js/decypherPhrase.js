function decypherPhrase(obj, str){
  let newObj = {};
  for ( let key in obj) {
    newObj[obj[key]] = key;
  }  
  return cypherPhrase(newObj, str);
}
"use strict"

let reverse = (str) => {
  if(typeof str !== 'string') {
    throw new TypeError(`String expected instead found ${typeof str}`);
  }

  let reversed_string = '';

  for(let i = str.length-1; i>=0; i--){
    reversed_string+=str[i];
  }

  return reversed_string;
}

module.exports = reverse;

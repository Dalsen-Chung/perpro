"use strict"
function one() {
  console.log('1');
  return function two(){
    console.log('2');
  }
}

'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .findIndex()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.findIndex(callback(element[, index[, array]])[, thisArg])
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .findIndex returns the array element index if any of the elements in the array pass the test
//      • .findIndex will return a -1 if there are no no elements that pass the test
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Find ages above 18
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://appdividend.com/2018/12/19/javascript-array-findindex-example-array-prototype-findindex-tutorial/ --
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Find ages above 18

let ages = [3, 10, 18, 20];

function findAge(array) {
   let ageFilter = array.findIndex(function(age) {
      return age > 10;
   });
   return ageFilter;
}

console.log(findAge(ages));

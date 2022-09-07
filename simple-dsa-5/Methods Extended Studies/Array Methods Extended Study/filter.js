'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      Array Method: .filter
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      let newArray = array.filter(function(element) {...}); 
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      •  filter takes one array of items and creates a new array with only those items you are filtering out
//         that are true.
//      •   For example, suppose you are filtering through an array of stores that are open at a certain time.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Find all positive values in an array:

const testArray = [1,-1, 2, 3, 4, 5, -4, -7];

function filterPositives(testArray) {
    const greater = testArray.filter(function(value) {
         return value >= 0;
    });
    console.log(greater);
}

console.log(filterPositives(testArray));





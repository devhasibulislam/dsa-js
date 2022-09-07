"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .charAt()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      string.charAt(index)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .charAt() methdo returns a new string consisting of a single UTF-16 code unit located at the
//        specific offset of the string.
//      •
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Find the given index of a string.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Find the given index of a string.

const myString = "This is a string";

function letterIndex(string, input) {
  let index = input;
  console.log(`The letter at index ${index} is ${string.charAt(index)}`);
}

letterIndex(myString, 1);

"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Print out the n-th entry (i.e. the n in >> function fib(n) {...}) << in the fibonacci series.
//        The fibonacci series is an ordering of numbers where each number is the sum of the preceding two.
//         For example, the sequence [0,1,1,2,3,5,8,13,21,34] forms the first ten entries of the fibonacci series.

//         Example: fib(4) === 3

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Profile differences in runtime complextiy between different solutions

// What is the BEST solution? 
//     1. The best way is to generate the entire series up to the nth entry and return the last entry.

// What are the special components of these solutions?:  
//     1. iterative
//     2. recursive

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Basically with a fibonacci sequence, you take the first two numbers, add them together, and then you get a new number... then repeat.

*/


///// Iterative SOLUTION 1 //////////////////////////////////
/* 
 The trick to this solution is that the first two numbers of ther seuqnece cannot be effectivly generated by a for loop.
 The algorithm is to look at the previous two number and add them together.
*/


// 1. Declare a function that holds an array.
//    - now because we know that the first two numbers of a fibonacci sequence are 0,1, we can insert that into our result array by default.
// 2.  now we need to have a for loop that will iterate from i = 2 (so start at 2) then iterate to n.
// 3. then we need to pull out the previous 2 records of the result array.


function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        const a = result[result.length - 1];   // first time the loop runs, i will be be equal to 2... so A will be recieving the second element.
        const b = result[result.length - 2];   // second time the loop runs, i will be equal to 2 - 2, which will initially give us 0.
        result.push(a + b)                     // push a + b into result.
    }
    return result[result.length - 1];
}

console.log(fib(4));

/*
Now the runtime complexity of this is as follows...
    - For every increase in n, we have to calculate one additional number.  so as n increases by one, we have to do one more calculation.
    - Thus, this problem is LINEAR run time
*/



///// RECURSIVE SOLUTION /////////////////////////////////////////
/* Whats interesting about this solution is that its a seen or not seen problem and if youve seen it, you know how to solve it

So why does this solution work?

Suppose we have a fib number of 5.

    function fib2(n) {                      // n = 5
        if (n < 2) {                        // is 5 less than 2?  No...
            return n;
        }
        return fib2(n - 1) + fib2(n - 2);   // so we call fib with 4 (i.e. 5 - 1 = 4) and fib with 3 (i.e. 5 - 2 = 3), this is TWO function calls.
    }                                       // then we go back to the top with 4 and repeat again.
    console.log(fib2(4))

*/

        function fib2(n) {
            if (n < 2) {
                return n;
            }
            return fib2(n - 1) + fib2(n - 2);
        }
        console.log(fib2(5))

/*


Note that in the above example, a fibonacci of 5 takes a much longer time than 1,2,3, or 4.
in fact the time difference is around 1-2ms as opposed to 1000ms.

So whats going on here?  why is there such a dramatic increase in time for such as small increase in value?

the answer has something to do with the number we call with fibonacci. when we call fib(5), the fibonnaci function
itself is being invoked many many times automatically.  And it get increasingly more complex the higher the number gets.
For example, if fib(5) which has 15 calls became fib(6), that becomes 27 calls!

This is an example of EXPONENTIAL runtime (2^n) where if you add a single element to a collection, the processing power 
required doubles.  Each additional element here would refer to each increment in the value of n (i.e. 4,5,6 etc.).

This is an exponential time solution.

But to be clear, any exponential time solution is not good.

so in an interview, if you wrote down the fibonacci solution above and were asked what the runtime would be, you would
say "the runtime would be exponential because for every increase in n we will have a dramtic increase in the amount
of function calls that we get.  A fib of 50 for example would take an extremely long time (seriously dont do it, it will 
crash the program. "

the next thing an interviewer will ask is "is there any way to improve this recursive solution not to be exponential runtime?"
You could do an itrative solution, but what if you had to improve the existing recursive solution?

The answer is MEMOIZATION.

Memoization stores the arguments of each function call along with the result.  If the function is called again with the 
same arguments, return the precomputed result, rather than running the function again.

So bascially, when we memoize a function we record the arguments of each function call.  So record the arguments, run the
function, then store the result of that function call.  if the function ever gets called again with the exact arguments,
rather than running the function again instead we return the result we had computed previously.

*/

function fib3(n) {
    if (n < 2) {
        return n;
    }
    return fib2(n - 1) + fib2(n - 2);
}
console.log(fib3(5))

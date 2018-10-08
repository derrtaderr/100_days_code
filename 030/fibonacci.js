//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers
//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    var added = currNumber + prevNumber;
    prevNumber = currNumber;
    currNumber = added;
  }

  return result;
}
sumFibs(4);
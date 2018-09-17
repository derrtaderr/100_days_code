//We'll pass you an array of two numbers. Return the sum of those two
//numbers plus the sum of all the numbers between them.


function sumAll(arr) {
  //set the maximum and minimun between the array.
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;

  // Create a for loop that will go form the minimun to the maimun and add each
  //number as it iterates.
  for (var i = min; i <= max; i++) {
    sum += i;
  }

  return (sum);
}

sumAll([1, 4]);
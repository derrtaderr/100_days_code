//Return the lowest index at which a value (second argument)
//should be inserted into an array (first argument) once it has been sorted.
//The returned value should be a number.
function getIndexToIns(arr, num) {
  // find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum) => num <= currNum);
  // Returns correct answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 50);
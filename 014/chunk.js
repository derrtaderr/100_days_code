//Write a function that splits an array (first argument) into groups the length of size (second argument)
//and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var chunkArr = [];
  for (var i = 0; i < arr.length; i += size) {
    chunkArr.push(arr.slice(i, size + i));
  }
  return chunkArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
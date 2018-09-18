//Make a function that looks through an array of objects (first argument) and returns an array
//of all objects that have matching name and value pairs (second argument).
//Each name and value pair of the source object has to be present in the object
//from the collection if it is to be included in the returned array.


function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  arr = collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
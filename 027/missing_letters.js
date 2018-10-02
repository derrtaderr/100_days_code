//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  var firstCharacter = str.charCodeAt(0);
  var valueToReturn = '';
  var secondCharacter = '';
  var addCharacters = function(a, b) {
    while (a - 1 > b) {
      b++;
      valueToReturn += String.fromCharCode(b);
    }
    return valueToReturn;
  };
  for (var index = 1; index < str.length; index++) {
    secondCharacter = str.charCodeAt(index);
    if (secondCharacter - firstCharacter > 1) {
      addCharacters(secondCharacter, firstCharacter);
    }
    firstCharacter = str.charCodeAt(index);
  }
  if (valueToReturn === '')
    return undefined;
  else
    return valueToReturn;
}

fearNotLetter("abce");
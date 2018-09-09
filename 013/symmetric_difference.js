//Algorithms: Find the Symmetric Difference
//Create a function that takes two or more arrays and returns an array of the symmetric difference
//symmetric difference (△ or ⊕) of the provided arrays.

function sym(args) {
    //slice all arguments into a single array
    var argsArray = [ ].slice.call(arguments);
    //callback funtion to iterate through multiple arrays
    function symDiff(arr1, arr2) {
        //array to store unique value
        var uniqueVals = [];
        for(var i = 0; i< arr1.length; i++) {
            if(arr2.indexOf(arr1[i]) <0 && uniqueVals.indexOf(arr1[i]) <0){
                uniqueVals.push(arr1[i]);
            }
        }
        arr2.forEach(function(item){
            if(arr1.indexOf(item)<0 && uniqueVals.indexOf(item)<0){
                uniqueVals.push(item);
            }
        });
        return uniqueVals;
    }
    return argsArray.reduce(symDiff);
}

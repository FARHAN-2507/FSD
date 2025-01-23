//merge 2 array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

//create 2 objects merge them as a single object 
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);
//create a function that adds 2 integeres parameeters and pass and integer array as an argument to the function
function addTwoIntegers(a, b) {
    return a + b;
}

const intArray = [7, 8, 9, 10];
const result = addTwoIntegers(intArray[0], intArray[3]);

console.log(result);

//create a function that accept 6 int values pass only 2 values as single element  and other values should be taken from int array



//write a function using rest parameter and should have all parameter as argument and display result 
function displayAllParameters(a, b, ...rest) {
    console.log(a, b, ...rest);
}

displayAllParameters(1, 2, ...intArray);
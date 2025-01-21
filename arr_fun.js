
let numbers = [1, 2, 3, 4, 5];

console.log("Original array:", numbers);

// Array functions

// 1. Push 
numbers.push(6);
console.log("After push:", numbers);

// 2. Pop 
numbers.pop();
console.log("After pop:", numbers);

// 3. Shift - Remove the first element from the array
numbers.shift();
console.log("After shift:", numbers);

// 4. Unshift - Add an element to the beginning of the array
numbers.unshift(0);
console.log("After unshift:", numbers);

// 5. Splice - Add/Remove elements from the array
numbers.splice(2, 1, 10);
console.log("After splice:", numbers);

// 6. Slice - Extract a section of the array
let slicedNumbers = numbers.slice(1, 3);
console.log("After slice:", slicedNumbers);

// 7. Concat - Merge two arrays
let moreNumbers = [7, 8, 9];
let allNumbers = numbers.concat(moreNumbers);
console.log("After concat:", allNumbers);

// 8. Join - Join all elements of the array into a string
let numberString = numbers.join(", ");
console.log("After join:", numberString);

// 9. Reverse - Reverse the order of the array
numbers.reverse();
console.log("After reverse:", numbers);

// 10. Sort - Sort the array
numbers.sort((a, b) => a - b);
console.log("After sort:", numbers);

// 11. IndexOf - Find the index of an element
let index = numbers.indexOf(3);
console.log("Index of 3:", index);

// 12. Includes - Check if an element is in the array
let hasTwo = numbers.includes(2);
console.log("Includes 2:", hasTwo);

// 13. Map - Create a new array with the results of calling a function on every element
let squaredNumbers = numbers.map(number => number * number);
console.log("After map:", squaredNumbers);

// 14. Filter - Create a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("After filter:", evenNumbers);

// 15. Reduce - Apply a function against an accumulator and each element in the array to reduce it to a single value
let sum = numbers.reduce((acc, number) => acc + number, 0);
console.log("After reduce:", sum);
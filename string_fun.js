// Create a string
let myString = "Hello, World!";

// Display the string
console.log("Original String: " + myString);

// String operations

// 1. Length of the string
console.log("Length: " + myString.length);

// 2. Convert to uppercase
console.log("Uppercase: " + myString.toUpperCase());

// 3. Convert to lowercase
console.log("Lowercase: " + myString.toLowerCase());

// 4. Find the index of a substring
console.log("Index of 'World': " + myString.indexOf("World"));

// 5. Extract a substring
console.log("Substring (0, 5): " + myString.substring(0, 5));

// 6. Replace a substring
console.log("Replace 'World' with 'JavaScript': " + myString.replace("World", "JavaScript"));

// 7. Split the string into an array
console.log("Split by ', ': " + myString.split(", "));

// 8. Trim whitespace from the string
let stringWithWhitespace = "   Hello, World!   ";
console.log("Trimmed String: '" + stringWithWhitespace.trim() + "'");

// 9. Check if the string starts with a specific substring
console.log("Starts with 'Hello': " + myString.startsWith("Hello"));

// 10. Check if the string ends with a specific substring
console.log("Ends with 'World!': " + myString.endsWith("World!"));

// 11. Repeat the string
console.log("Repeat 3 times: " + myString.repeat(3));
// Q1
console.log('Farhan');
// array Q2
let arr = []
arr.push(1);
arr.push(2);
arr.push(3);
console.log('Array after pushing ',arr);
arr.pop();
console.log('Array after poping ',arr);
//string Q3
let str = "Hello, World!";
console.log('String:', str);

let index = str.indexOf('W');
console.log('Index of "W":', index);

let char = str.charAt(7);
console.log('Character at index 7:', char);

// Q4
let car = {
    make: 'Nissan',
    model: 'Magnite',
    year: 2021,
    color: 'White',
    start: function() {
        console.log('Car started');
    },
    drive: function() {
        console.log('Car is driving');
    }
};

console.log('Car object:', car);
car.start();
car.drive();
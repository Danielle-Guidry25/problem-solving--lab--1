// arrays.js

// Example of creating an array
const fruits = ['apple', 'banana', 'cherry'];

// Accessing elements in an array
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

// Adding elements to an array
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Iterating over an array
fruits.forEach((fruit) => {
    console.log(fruit);
});

// Mapping an array to a new array
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ['APPLE', 'BANANA', 'CHERRY']

// Filtering an array
const filteredFruits = fruits.filter((fruit) => fruit.startsWith('b'));
console.log(filteredFruits); // Output: ['banana']

// Finding an element in an array
const foundFruit = fruits.find((fruit) => fruit === 'cherry');
console.log(foundFruit); // Output: cherry
letgrade =90

if (grade === 100)
{
    console.log('A+');
} else if (grade > 90) {
    console.log('A');
} else if (grade > 80) {
    console.log('B');
} else if (grade > 70) {
    console.log('C');
} else if (grade > 60) {
    console.log('C');
} else if (grade > 50) {
    console.log('D');
} else {
    console.log('F');
}

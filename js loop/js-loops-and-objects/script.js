// Print numbers 1 through 10 in the console
for (let a = 1; a <= 10; a++) { // Fixed loop variable
    console.log(a);
}

// Print even numbers from 2 to 20
for (let a = 2; a <= 20; a += 2) {
    console.log(a);
}

// Loop through the animals array and print each animal with a message
let animals = ["dog", "cat", "rabbit", "parrot"];
for (let d = 0; d < animals.length; d++) {
    console.log(`I like ${animals[d]}.`);
}

// Print the colors array in reverse order
let colors = ["red", "green", "blue", "yellow"];
for (let b = colors.length - 1; b >= 0; b--) {
    console.log(colors[b]);
}

// Convert Brandon to an object
let Brandon = {
    age: 12,
    favoriteColor: "green",
    hasSister: true,
    hobbies: ["playing outside", "video games", "learning new things"],
    personality: ["kind", "helpful", "creative", "athletic"],
    favoriteActivities: ["watching movies", "playing sports like basketball"],
    outlook: "always looks on the bright side of life"
};

// Add a new property using dot notation
Brandon.likesShopping = "He likes going shopping for fanboy toys.";

// Log the updated object
console.log(Brandon);

let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960
    },
    {
        title: "Anne Frank",
        author: "Anne Frank",
        yearPublished: 1949
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        yearPublished: 1997,
        isFavorite: true // Marking this book as favorite
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        yearPublished: 1937
    }
];

// Log the array of book objects
console.log(books);

// Loop through the books array and print each book
for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].title} by ${books[i].author} - ${books[i].yearPublished} Pages`);
}

// Loop through the books array to find and print the favorite book
for (let i = 0; i < books.length; i++) {
    if (books[i].isFavorite) {
        console.log(`Favorite Book: ${books[i].title} by ${books[i].author}`);
    }
}

function describePerson(obj) {
    return `${obj.name} is ${obj.age} years old and enjoys ${obj.hobby}.`;
}

// Example usage
let person = {
    name: "Aurora ",
    age: 7, 
    hobby: "coloring"
};

console.log(describePerson(person)); // Output: "Aurora  is 7 years old and enjoys coloring."


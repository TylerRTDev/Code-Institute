// Task 1
// Create an array of your favorite books. Perform the following operations:

var books = ["book1", "book2", "book3"];

// 1) Add a new book to the end of the array.
books.push("book4");

// 2) Remove the first book from the array.
books.splice(0, 1);

// 3) Find the index of a specific book.
console.log(books[0]);

// 4) Print the updated array.
console.log(books);

// Task 2
// Create a list of numbers from 1 to 5. Perform the following operations:
var numbers = [1, 2, 3, 4, 5];

// Add the number 6 to the end of the list.
numbers.push(6);

// Remove the number at index 3.
numbers.splice(3, 1);
// Iterate over the list and print each number.
let i = 0;

while (i < numbers.length)
{
    console.log(numbers[i]);
    i++;
}

// Task 3
// Create an object to store information about a car. Include properties for make, model, and year. Perform the following operations:
let car = {
    make: "Ford",
    model: "Focus",
    year: 2024
};

// Add a new property for color.
car.colour = "blue";
// Update the year of the car.
car.year = 2025;
// Print the updated object.
console.log(car);

// Task 4
// Create a set of your favorite fruits. Perform the following operations:
var fruits = new Set();

// Add a new fruit to the set.
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Check if a specific fruit is in the set.
console.log(fruits.has("Banana"));

// Remove a fruit from the set.
fruits.delete("Apple");

// Print the updated set.
console.log(fruits);

// Task 5
// Create a map to store the names and ages of three people. Perform the following operations:
let person = new Map();

person.set("name", "John");

// Add a new person to the map.

// Update the age of an existing person.
// Delete a person from the map.
// Print the updated map.
 
// Task 9
// Create a stack to manage a collection of book titles. Perform the following operations:
 
// Add three books to the stack.
// Remove the top book from the stack.
// Check the top book in the stack.
// Print the updated stack.
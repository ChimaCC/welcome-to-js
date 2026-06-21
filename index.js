
console.log("--- Questions 1 & 2: Variables and Data Types ---");

let myName = "Alex";             
let myAge = 22;                  
let mySchool = "Tech University";

let studentName = "Sarah Connor"; 
let score = 95;                   
let isPresent = true;             

// Displaying the variables
console.log("My Name:", myName);
console.log("My Age:", myAge);
console.log("My School:", mySchool);
console.log("Student Name:", studentName);
console.log("Score:", score);
console.log("Is Present:", isPresent);
console.log("\n"); 


console.log("--- Question 3: Operators ---");

let price = 5000;
let quantity = 5;

// Arithmetic Operations
console.log("Addition (price + quantity):", price + quantity);
console.log("Subtraction (price - quantity):", price - quantity);
console.log("Multiplication (price * quantity):", price * quantity);
console.log("Division (price / quantity):", price / quantity);
console.log("\n");


console.log("--- Question 4: Template Literals ---");

let firstName = "David";
let lastName = "Peter";
let age = 20;

// Combining variables inside a sentence using backticks (`)
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
console.log("\n");

console.log("--- Question 5: Conditional Statements (Grading System) ---");

let testScore = 75; 
console.log(`Testing grading system with a score of: ${testScore}`);

if (testScore >= 70) {
    console.log("Grade: Excellent");
} else if (testScore >= 50 && testScore <= 69) {
    console.log("Grade: Pass");
} else {
    console.log("Grade: Fail");
}
console.log("\n");

console.log("--- Question 6: For Loop (1 to 20) ---");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// Challenge 1: Student Grade Generator
// Write a program that prompts the user to input student marks between 0 and 100,
// and outputs the corresponding grade.

// Prompt the user for student marks
const marks = prompt("Enter student marks (between 0 and 100):");

// Convert the input to a number
const studentMarks = parseInt(marks);

// Determine the grade based on the marks
let grade;
if (studentMarks > 79) {
  grade = "A";
} else if (studentMarks >= 60 && studentMarks <= 79) {
  grade = "B";
} else if (studentMarks >= 50 && studentMarks <= 59) {
  grade = "C";
} else if (studentMarks >= 40 && studentMarks <= 49) {
  grade = "D";
} else {
  grade = "E";
}

// Output the grade
console.log("Grade: " + grade);


// Challenge 2: Speed Detector
// Write a program that takes as input the speed of a car, and determines the demerit points.

// Prompt the user for the car speed
let carSpeed = prompt("Enter the car speed:");

// Convert the input to a number
let speed = parseInt(carSpeed);

// Calculate the demerit points
let speedLimit = 70;
let demeritPoints = Math.floor((speed - speedLimit) / 5);

// Output the demerit points
if (demeritPoints > 0) {
  console.log("Points: " + demeritPoints);
  if (demeritPoints > 12) {
    console.log("License suspended");
  }
} else {
  console.log("Ok");
}

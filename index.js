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

// Display the result on the page
document.getElementById('output').innerHTML = `Student Grade: ${grade}`;



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
document.getElementById('output').innerHTML += `<br>Demerit Points: ${demeritPoints}`;


// Challenge 3: Net Salary Calculator
// Write a program to calculate an individual's Net Salary.

// Prompt the user for basic salary and benefits
let basicSalary = prompt("Enter basic salary:");
let benefits = prompt("Enter benefits:");

// Convert the inputs to numbers
let salary = parseInt(basicSalary);
let benefitsAmount = parseInt(benefits);

// Calculate tax, NHIF deductions, NSSF deductions, gross salary, and net salary
let tax = 0.1 * salary;
let NHIFDeductions = 0.02 * salary;
let NSSFDeductions = 0.06 * salary;
let grossSalary = salary + benefitsAmount;
let netSalary = grossSalary - (tax + NHIFDeductions + NSSFDeductions);

// Output the calculated values
console.log("Payee (Tax): " + tax);
console.log("NHIF Deductions: " + NHIFDeductions);
console.log("NSSF Deductions: " + NSSFDeductions);
console.log("Gross Salary: " + grossSalary);
console.log("Net Salary: " + netSalary);

document.getElementById('output').innerHTML += `<br>Net Salary: ${netSalary.toFixed(2)}`;

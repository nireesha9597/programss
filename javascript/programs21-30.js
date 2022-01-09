//Integer value between two numbers-program21
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between ${min} and ${max} is ${a}`);

// program that checks if the number is positive, negative or zero-program22
const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}

// program to find the largest among three numbers-program23
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);

// program to print prime numbers between the two numbers-program24
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let nireesha = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && nireesha == 0) {
        console.log(i);
    }
}

// program to find the factorial of a number-program25
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

// program for a simple calculator-program26
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);

// string starts with 'N' and ends with 'B'-program27

function checkString(str) {
    if(str.startsWith('N') && str.endsWith('B')) {
        console.log('The string starts with N and ends with B');
    }
    else if(str.startsWith('N')) {
        console.log('The string starts with N but does not end with B');
    }
     else if(str.endsWith('B')) {
        console.log('The string starts does not with N but end with B');
    }
    else {
        console.log('The string does not start with N and does not end with B');
    }
}
let nireesha1 = prompt('Enter a string: ');
checkString(nireesha1);

//program to check if a string starts with another string-program28
const string = 'hello world';
const toCheckString = 'he';
if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// program to display the date and time-program29
const date = new Date(1998, 4, 30, 6, 12, 30);// get date and time
const b = date.toDateString();
const time = date.toLocaleTimeString();// get the time as a string
console.log('Date: ' + b);// display date
console.log('Time: ' + time);// display time

// program to compare value of two dates-program30

const d1 = new Date();// create two dates
const d2 = new Date();
const compare1 = d1 < d2;//comparisions of two dates as assume
console.log(compare1);

const compare2 = d1 > d2;
console.log(compare2);

const compare3 = d1 <= d2;
console.log(compare3);

const compare4 = d1 >= d2;
console.log(compare4);

const compare5 = d1.getTime() === d2.getTime();
console.log(compare5);

const compare6 = d1.getTime() !== d2.getTime();
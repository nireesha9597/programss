//Helloworld-program1
console.log("hello world");

//adding two numbers-program2
const a=100;
const b=200;
const sum=a+b
console.log('The sum of' +a+'and'+b+'is'+sum);

//area of triangle-program3

const num1=parseInt(prompt('num1: '));
const num1=parseInt(prompt('num2: '));
const num1=parseInt(prompt('num3: '));
const sum =(num1+num2+num3)/2;

const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);

//swap two numbers-program4
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//prime two numbers-program5

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

//create objects in different ways-program6

const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};
console.log(typeof person); 
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// convert object to string-program7

const person = {
    name: 'siddu',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);

//get URL-program8

const url1 = window.location.href;
const url2 = document.URL;
console.log(url1);
console.log(url2);

//write to console-string,variable,integer,function,object-program9
console.log(nireesha);//string
console.log(2);//integer
//variable
const a ='mock'
console.log(a);
//function

function name(){
    return 'niru'
}
console.log(name());
//object
let obj={
    name:keerthana,
    age:22,
    university:pscmr,
}
console.log(obj);

//number is even or odd-program10
const num =prompt("enter a number")
if(num % 2==0){
    console.log(" the number is even");
}
else{
    console.log("the number is odd");
}



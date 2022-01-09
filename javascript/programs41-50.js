// program-41

const img = new Image();
img.src = "//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png"
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}

//function overloading-program-42

function sum() {  
    
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  // i can take function overloading without argument
    }
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  //with arguments(assume)
    }
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}

sum();
sum(4); 
sum(4, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); 

//program-43
//inculde constants

const a = 2;
console.log(a);
{
    const a = 32;
    console.log(a);
}
console.log(a);

const arr = ['niru', 'buddy', 'bosu'];
console.log(arr);
arr[3] = 'family';
console.log(arr);


//programs-44

function performIntersection(arr1, arr2) {

    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
 
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
   
//program-45

const student = { 
    name: 'mommy',
    age: 20,
    hobbies: ['execute', 'testing', 'coding'],
};

let count = 0;
for(let key in student) {

    
    ++count;//increment operator
}

console.log(count);

//program-46(LCM of two numbers)
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');
let niru = (num1 > num2) ? num1 : num2;
while (true) {
    if (niru % num1 == 0 && niru % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${niru}`);
        break;
    }
    niru++;
}

//HCF of two numbers-program47
let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');
while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}
console.log(`HCF is ${number1}`);

//program-48(natural numbers)

const number = parseInt(prompt('Enter a positive integer: '));
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log('The sum of natural numbers:', sum);

//program-49

//write a program  swap two numbers without using temp variables

var a=10;
var b=20;
a=a+b;
console.log(a);
b=a-b;
console.log(b);
a=a-b;
console.log(b);

//write a programto swap 2 numbers with using tempoary numbers

var a=10;
var b=20;
var temp=a;
console.log(a+" "+b);
a=b;
b=temp;
console.log(a+" "+b);

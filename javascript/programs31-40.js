// program to check if an object is an array-program31

function checkObject(arr) {
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}

const array = [11, 21, 31];
checkObject(array);

//program32
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between ${min} and ${max} is ${a}`);

//prorgam33
//first I create a date (assume date)-step1
const d1 = new Date();
console.log(d1);
//next coverting date into numbers-step2
const result = d1.getTime();
console.log(result);

// program to remove duplicate value from an array-program34

function getUnique(arr){
    let uniqueArr = [...new Set(arr)];//remove duplicate
console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
getUnique(array);

//program35

function Age(a, b) {

    return a.age - b.age;
}

const family = [{name: 'nireesha', age:23},{name: 'bhavana', age:22}, {name: 'siddharth varma', age:26}];

console.log(family.sort(Age));

//program36
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}
const setA = new Set(['nireesha', 'bhavana', 'siddu']);
const setB = new Set(['family', 'nireesha', 'buddy']);
const result = union(setA, setB);
console.log(result);

//program37
function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 6;
splitIntoChunk(array, chunk);

//program38

function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(7);
checkVariable('niru');
checkVariable(null);
checkVariable(newVariable);

//program39

const a = 5;
console.log(a);
{
    const a = 50;
    console.log(a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);
arr[3] = 'hello';
console.log(arr);

//program40

// SetTimeOut()

function greet() {
    console.log('Hello world');
}
setTimeout(greet, 3000);
console.log('This message is shown first');

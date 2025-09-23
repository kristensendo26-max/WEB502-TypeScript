// Bài 1:
// number, string, boolean

let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is ';
let permit: boolean = true;

const result = number1 + number2;
if(permit){
    console.log(phrase + result);
}else{
    console.log('Not show result');
}

// type inference 
// function add(x = 5){
//     let phrase = 'Result is ';

//     phrase = 10;
//     x = '2.8';

//     return phrase + x;
// }

// let result: number = add()

// Object 
// var person : {
//     name: string,
//     age: number
// }

// person = {
//     name: "Typescript",
//     age: 11
// }

// console.log(person.name);
// console.log(person.age);

// Bài 4:
// Array, tuple, any, enum
enum Role {ADMIN, READ_ONLY, AUTHOR};
const person : {
    name: string,
    age: number,
    hobbies: string[],
    role: string,
    roletuple: [number, string]
}={
    name: 'Typescript',
    age: 11,
    role: Role.ADMIN,// Error
    roletuple: [2, 'author']
}

let favouriteActivities: any[];
favouriteActivities = [5, 'Sports', true];

if(person.role === Role.AUTHOR){
    console.log('is author');
}

person.roletuple.push('admin');
person.roletuple[1] = 10; // Error
person.roletuple = [0, 'admin', 'user']; // Error


// Literal type and custom type

type Combinable = number | string;
function combine(input1: Combinable, input2: number | string, resultConversion: 'as-number'|'as text'){
    let result;
    if(typeof input1==='number' && typeof input2==='number' || resultConversion==='as-number'){
        result = parseFloat(input1) + parseFloat(input2);
    }else{ // concenated
        result = input1.toString() + input2.toString();
    }return result;
}

const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);

const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);

const combineText = combine('TypeScript Vs ', 'Javascript', 'as text');
console.log(combineText);


// Num and undefined 
// Variable declared and assigned to null 
var a = null;
console.log(a);
console.log( typeof(a));

// Variable declaration without assigning any value to it 
var b;
console.log(b);
console.log(typeof(a));
console.log(undeclaredVar);

// Unknown and any 

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript'; 
userName = userInput; 
userName = <string> userInput;
if(typeof userInput === 'string'){
    userName = userInput;
}












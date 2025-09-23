// Bài 1:
// number, string, boolean
var number1 = 5;
var number2 = 2.8;
var phrase = 'Result is ';
var permit = true;
var result = number1 + number2;
if (permit) {
    console.log(phrase + result);
}
else {
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Typescript',
    age: 11,
    role: Role.ADMIN, // Error
    roletuple: [2, 'author']
};
var favouriteActivities;
favouriteActivities = [5, 'Sports', true];
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[1] = 10; // Error
person.roletuple = [0, 'admin', 'user']; // Error
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = parseFloat(input1) + parseFloat(input2);
    }
    else { // concenated
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
var combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);
var combineText = combine('TypeScript Vs ', 'Javascript', 'as text');
console.log(combineText);
// Num and undefined 
// Variable declared and assigned to null 
var a = null;
console.log(a);
console.log(typeof (a));
// Variable declaration without assigning any value to it 
var b;
console.log(b);
console.log(typeof (a));
console.log(undeclaredVar);
// Unknown and any 
var userInput;
var userName;
userInput = 5;
userInput = 'Typescript';
userName = userInput;
userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}

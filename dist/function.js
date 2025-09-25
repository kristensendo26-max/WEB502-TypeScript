"use strict";
// Khai báo function
function addNumber(num1, num2) {
    return num1 + num2;
}
// 2 default param
function showName(name = "Tung", age) {
    return `XIn chào ${name}`;
}
const myNamee = showName();
console.log(myNamee);

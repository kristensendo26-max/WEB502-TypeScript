"use strict";
let myName = "Tung";
let herName = "Hoa";
// Array
// Mang toan chuoi
let myCourse = ["NodeJs", "TypeScript"];
let myPoint = [1, 2, 3, 4];
// Object :{}
// Type
let student = {
    name: 'tung',
    age: 20,
    address: 'Ha Noi',
    id: 123
};
let dog = {
    name: 'Truong',
    breed: 'Becgie',
    age: 20,
    from: 'UK'
};
// Any: Nhan het cac kieu gia tri <type>
let dog2 = {
    name: 'Truong',
    breed: 'Becgie',
    age: 20,
    from: 'UK'
};
// void: khong tra ve return 
// 7. Nhận nhiều type (Union Type)
let a;
a = 3;
a = "a";
a = true;
// 7.2 Literal Type: Chỉ định giá trị mà biến có thể nhận
let gender;
// gender = "Gay"; // Ko hợp lệ
gender = "Male"; //ok
let orderStatus;
// Null và Undefined
let value = null;
let score = undefined;
// truthy trong if (về tìm hiểu)
//unknown
let input;
// input = toLocaleLowerCase(); // 0 hợp lệ
if (typeof input === "string") {
    input.toLocaleLowerCase();
}
// 10. Ép kiểu
let someValue = "This is a string";
let strLength = someValue.length;
// Hoặc sử dụng cú pháp <>
let strLength2 = someValue.length;

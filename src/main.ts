let myName : string = "Tung";
let herName  = "Hoa";

// Array
// Mang toan chuoi
let myCourse : string[] = ["NodeJs","TypeScript"];
let myPoint : number[] = [1,2,3,4];

// Object :{}

// Type
let student :{
    id: number;
    name: string;
    age: number;
    address: string;
} = {
    name :'tung',
    age: 20,
    address: 'Ha Noi',
    id: 123
};

// Interface 
interface Dog {
    name: string;
    breed: string;
    age: number;
    from: string;
}

let dog: Dog = {
    name: 'Truong',
    breed: 'Becgie',
    age: 20,
    from: 'UK'
}

// Any: Nhan het cac kieu gia tri <type>
let dog2: any = {
    name: 'Truong',
    breed: 'Becgie',
    age: 20,
    from: 'UK'
}

// void: khong tra ve return 

// 7. Nhận nhiều type (Union Type)
let a : String | Number | boolean;

a = 3;
a = "a";
a = true; 

// 7.2 Literal Type: Chỉ định giá trị mà biến có thể nhận

let gender: "Male" | "Female";
// gender = "Gay"; // Ko hợp lệ
gender = "Male"; //ok

let orderStatus: "Pending" | "Processing" | "Confirmed";

// Null và Undefined
let value: string | null=null;
let score: number | undefined=undefined;
// truthy trong if (về tìm hiểu)

//unknown
let input: unknown;
// input = toLocaleLowerCase(); // 0 hợp lệ
if(typeof input === "string"){
    input.toLocaleLowerCase();
}

// 10. Ép kiểu
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
// Hoặc sử dụng cú pháp <>
let strLength2: number = (<string>someValue).length;

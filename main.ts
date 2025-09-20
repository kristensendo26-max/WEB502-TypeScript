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
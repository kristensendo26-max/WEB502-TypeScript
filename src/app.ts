// Bai 1
// 1.
function tinhTong (): number{
    let a : number = 3;
    let b : number = 4;
    return a + b;
}

console.log(tinhTong());

// 2. default value, optional parameter, rest parameter
// Rest parameter: nghĩa là gom tất cả các tham số còn lại khi gọi hàm thành một mảng.
const sum = (a : number = 3, b? : number, ...rest: number[]): number =>{
    // Nếu b không có thì gán bằng 0
    const second = b ?? 0;

    // a + second: cộng 2 tham số đầu.
    // + rest.reduce(...): cộng thêm tất cả các số còn lại.
    return a + second + rest.reduce((acc, cur) => acc + cur, 0);
    
    // rest.reduce((acc, cur) => acc + cur, 0) có nghĩa là:
    // reduce duyệt qua mảng rest.
    // acc: biến tích lũy (accumulator), bắt đầu từ 0 (số cuối cùng trong câu lệnh).
    // cur: phần tử hiện tại của mảng.
    // (acc, cur) => acc + cur: mỗi lần lặp sẽ cộng dồn giá trị vào acc.
}


console.log(sum(5));
console.log(sum(5,10));

// 3. Merging Array
function merge(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2]; // dùng spread operator để gộp mảng
}

// Test
console.log(merge([1, 2, 3], [4, 5, 7])); 

// Bài 2
// 1. Function & void
let sum3 = (x: number=5, y?:number)=>{return x + <number>y;}
let speech = (output:any):void =>{
    console.log("result f&v" + output);
}
speech(sum(5,12));
console.log(speech(sum(8,5)));

// 2. Never & void 
// let something: void = undefined;
// let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
// function throwError(errorMsg: string):never{
//     throw new Error(errorMsg);
// }

// 3. Function and callback 
function AddandHandle(x:number, y: number, cb:(num:number)=>void){
    const result = x + y;
    cb(result);
}
AddandHandle(10,20, (result)=>{console.log(result); })





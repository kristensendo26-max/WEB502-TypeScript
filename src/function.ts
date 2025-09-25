// Khai báo function
function addNumber(num1: number, num2: number): number{
    return num1 + num2;
}

// 2 default param
function showName(name: string = "Tung", age?: number): string{
    return `XIn chào ${name}`;
}

const myNamee = showName();

console.log(myNamee);

function tinhTong (...so : number[]){
    // ...so: rest parameter: Gom toan bo gia tri truyen vao mot mang
    return so.reduce((tong, them) => tong + them,0);
    // reduce: rut gon 1 mang thanh 1 gia tri duy nhat 
}

console.log(tinhTong(1,2,3));

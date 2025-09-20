function tinhTong() {
    var so = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        so[_i] = arguments[_i];
    }
    // ...so: rest parameter: Gom toan bo gia tri truyen vao mot mang
    return so.reduce(function (tong, them) { return tong + them; }, 0);
    // reduce: rut gon 1 mang thanh 1 gia tri duy nhat 
}
console.log(tinhTong(1, 2, 3));

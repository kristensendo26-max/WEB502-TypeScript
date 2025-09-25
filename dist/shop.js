"use strict";
const products = [
    { id: 1, name: "Chuột", price: 500000, category: "Điện tử" },
    { id: 2, name: "Gạo", price: 50000, category: "Thực phẩm" },
    { id: 3, name: "Muối", price: 4000, category: "Thực phẩm" },
    { id: 4, name: "Dao", price: 35000, category: "Đồ gia dụng" },
    { id: 5, name: "Bàn phím", price: 200000, category: "Điện tử" }
];
// Filter
function filterByCategory(products, category) {
    // tìm p theo cate
    return products.filter((p) => p.category === category);
}
// Tính tổng
function calculateTotalPrice(products) {
    // Reduce: Duyệt qua từng phần tử của mảng và tích lũy kết quả vào một biến
    return products.reduce((sum, p) => sum + p.price, 0);
    // array.reduce((accumulator, currentValue) => {...}, giá trị mặc định)
}
// Min max
function findMinMax(products) {
    let min = products[0];
    let max = products[0];
    // for (const p of products) → duyệt từng sản phẩm trong danh sách
    for (const p of products) {
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    }
    return { min, max };
}
console.log(filterByCategory(products, "Điện tử"));
console.log("Tổng:", calculateTotalPrice(products));
console.log("Min & Max:", findMinMax(products));

// Truthy and Falsy Values
// Có thể ép ngược từ số --> Chuỗi
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log("Giá trị của b là : " + b);
//false, 0, -0, 0n, "", null, undefined, NaN đay là 8 giá trị falsy
let c = Boolean(false);
console.log(c);
console.log(typeof c);

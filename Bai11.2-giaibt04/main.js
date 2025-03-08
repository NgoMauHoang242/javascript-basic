let r = Number(prompt("Nhập bán kính của đường tròn: "));
console.log(r);
console.log(typeof r);

let PI = Math.PI;
let chuVi = 2 * PI * r;
let dienTich = PI * r * r;

console.log("Chu vi = " + chuVi);
console.log("Dien tich = " + dienTich);

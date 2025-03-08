let r = Number(prompt("Nhập bán kính đường tròn: "));
let PI = Math.PI;
let chuVi = 2 * PI * r;
let dienTich = PI * r * r;
console.log("Chu vi của hình tròn là: " + chuVi);
console.log("Diện tích của hình tròn là: " + dienTich);

let a = Number(prompt("Nhập chiều dài của hình chữ nhật: "));
let b = Number(prompt("Nhập chiều rộng của hình chữ nhật: "));
p = (a + b) * 2;
s = a * b;
console.log("Chu vi của hình chữ nhật là " + p);
console.log("Diện tích của hình chữ nhật là " + s);

let dt = Number(prompt("Nhập điểm Toán "));
let dv = Number(prompt("Nhập điểm văn: "));
4;
let da = prompt("Nhập điểm anh: ");
let dtb = (dt + dv + da) / 3;
console.log(dtb.toFixed(2));

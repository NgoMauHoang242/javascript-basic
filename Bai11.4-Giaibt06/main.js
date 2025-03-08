let a = Number(prompt("Nhập điểm toán ="));
let b = Number(prompt("Nhập điểm văn ="));
let c = Number(prompt("Nhập điểm anh ="));

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

let dtb = (a + b + c) / 3;

console.log("Điểm trung bình là " + dtb.toFixed(2));

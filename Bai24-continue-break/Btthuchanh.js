//bt15
let n = Number(prompt("Mời nhập vào số nguyên n: "));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Số không hợp lệ, vui lòng nhập lại: "));
}
console.log(n);

//dùng for
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
//   gt *= i; //gt = gt * i
// }
// console.log(n + "! = " + gt);

//dùng while
let gt = 1;
let i = 1;

while (i <= n) {
  gt *= i; //gt = gt * i
  console.log(i);
  i++;
}
console.log(n + "! = " + gt);

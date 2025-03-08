function tinhGiaiThuaFor(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

function tinhGiaiThuaWhile(n) {
  let gt = 1;
  let i = 1;
  while (i <= n) {
    gt *= i; //gt = gt*i;
    i++;
  }
  return gt;
}
//Nhập liệu
let n = Number(prompt("Nhập vào số n"));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("n không phải số nguyên , yêu cầu nhập lại"));
}

let ketQuaFor = tinhGiaiThuaFor(n);
console.log(`${n}! sử dụng for = ${ketQuaFor}`);
let ketQuaFor1 = tinhGiaiThuaWhile(n);
console.log(`${n}! sử dụng while = ${ketQuaFor1}`);

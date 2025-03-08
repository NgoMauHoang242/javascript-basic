let a = Number(prompt("Nhập a = : "));
while (!Number.isInteger(a)) {
  a = Number(prompt("Nhập lại a, a phải là số nguyên"));
}
console.log(a);

if (a % 2 !== 0) {
  alert("tôi không tính tổng số lẻ, bai bai");
} else {
  let sum = 0;
  for (let i = 0; i <= a; i += 2) {
    sum += i; //sum = sum + i;
  }
  alert("Tổng các số chẵn từ 0 đến " + a + " là " + sum);
}

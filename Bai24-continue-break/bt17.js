let n = Number(prompt("Nhập n"));
while (!Number.isInteger(n)) {
  n = Number(prompt("Nhập sai yêu cầu nhập lại"));
}
console.log(n);

let sum = 0;
for (i = 1; i <= n; i += 2) {
  console.log(i);
  if (i === 3) {
    continue;
  }
  sum += i;
}
alert(`Tổng số lẻ từ 1 đến ${n} ( loại trừ 3 ) là ${sum}`);

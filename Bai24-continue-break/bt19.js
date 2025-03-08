let sum = 0;
for (let n = 1; n <= 10; n++) {
  //   console.log(n);
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  console.log(gt);
  sum = sum + gt;
}
console.log("Tổng s = " + sum);

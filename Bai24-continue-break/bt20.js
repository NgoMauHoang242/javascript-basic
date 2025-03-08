/*
let n = 6;
let tong = 0;
for (let i = 1; i < n; i++) {
  //   console.log(i);
  if (n % i === 0) {
    console.log(i);
    tong += i; //tong = tong + i;
  }
}
console.log(tong);
//Kiểm tra số hoàn hảo
if (tong === n) {
  console.log(`${n} là số hoàn hảo`);
} else {
  console.log(`${n} không phải là số hoàn hảo`);
}
*/
for (let n = 1; n <= 1000; n++) {
  let tong = 0;
  //Tổng ước thực
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      tong += i; //tong = tong + i;
    }
  }
  //So sánh tổng ước thực có = n không
  if (tong === n) {
    console.log(n);
  }
}

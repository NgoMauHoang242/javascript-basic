//for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//vd: xuất các số chẵn từ 0 đến 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Tổng các số chẵn từ 0 đến 10
let tong = 0;
for (let i = 0; i <= 10; i += 2) {
  tong += 1; //tong = tong + i
}
console.log("Tổng các số chẵn từ 0 đến 10 " + tong);

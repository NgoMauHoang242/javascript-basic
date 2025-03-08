for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Số chia hết cho 3 là " + i);
  }
}
let count = 0;
for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log("Có " + count + " số chia hết cho 3 từ 10 đến 50");

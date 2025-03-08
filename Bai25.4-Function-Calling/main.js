//Function Calling Other Functions
//Hàm th phép tính cộng
function cong(a, b) {
  return a + b;
}

//Hàm th phép tính nhân
function nhan(x, y) {
  return x * y;
}
//Hàm gọi các hàm khác để thực hiện phép tính tổng và nhân
function congNhan(num1, num2, num3) {
  //Gọi hàm cộng để tính tổng num 1 + num 2
  let sum = cong(num1, num2);
  //Gọi hàm nhân để tính tích sum * num 3
  let product = nhan(sum, num3);
  //Trả về kết quả
  return product;
}

//sử dụng hàm congNhan
let result = congNhan(2, 3, 4);
console.log(result);

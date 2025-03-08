//Đệ Quy
function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

//Gọi hàm giai thừa
let ketQua = giaiThua(5);
console.log(ketQua);

//ví dụ tính fibonacci
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}
//gọi hàm
let ketQua2 = f(10);
console.log(ketQua2);

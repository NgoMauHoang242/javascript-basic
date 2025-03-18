//Toán tử spread (...)

//Tạo bản sao (clone) của mảng
//Tạo ra mảng  mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
let M1 = [1, 2, 3];
let M2 = [...M1];
console.log(M2);
//M2 là clone của M1
//Thay đổi M2 không liên quan đến M1
M2[0] = 99;
console.log("mảng M2 = " + M2);
console.log("mảng M1 = " + M1);

//Truyền đối số vào hàm
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
let result = sum(...numbers);
console.log(result);

//Kết hợp mảng
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArr = [...arr1, ...arr2];
console.log(combineArr);

// Tạo mảng mới với thêm phần tử
let M3 = [1, 2, 3];
let M4 = [...M3, 4];
console.log(M4);

//Chuyển iterable thành mảng
let myName = "Mậu";
let chars = [...myName];
console.log(chars);

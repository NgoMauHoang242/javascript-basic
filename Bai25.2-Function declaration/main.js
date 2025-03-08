// Tìm hiểu thêm về cách khai báo hàm
// 2.1 function declaration
function tenFunction(paramerters) {}
//Khai báo hàm
function tong(a = 0, b = 0) {
  return a + b;
}
//Gọi hàm
console.log(tong(5, 3));

//2.2 Function expression
let ten_bien = function (paramerters) {};
//Khai báo
let tich = function (a = 1, b = 1) {
  return a * b;
};
//Gọi hàm
console.log(tich(3, 5));

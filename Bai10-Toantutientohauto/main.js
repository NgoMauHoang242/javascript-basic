//Toán tử tăng / giảm tiền tố và hậu tố  (++, --)
//- Dùng để tăng hoặc giảm value của biến 1 đơn vị.
let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++;
b--;
++c;
--d;
//xuất kết quả
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Trường hợp biểu thức phức tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x);
console.log(y);
console.log(z);

// function expression
let multiply = function (a, b) {
  return a * b;
};
//Gọi hàm
console.log(multiply(5, 4));

//Arrow function (hàm mũi tên )
let mutiplyArrow = (a, b) => a * b;
//Gọi hàm
console.log(mutiplyArrow(5, 5));

//Tuy nhiên với trường hợp phức tạp, cần thêm khối {}

//function Expression
let multiplyAndAdd = function (a, b) {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

//Arrow function
let multiplyAndAddArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};
// Gọi hàm
console.log(multiplyAndAdd(3, 5));
console.log(multiplyAndAddArrow(3, 5));

//set timeout
//function Hàm mà chúng ta muốn thực hiện sau khoảng thời gian.
//delay: thời gian chờ trước khi hàm được gọi, đo bằng mili giây

//ôn lại khai báo hàm
//arrow function
let helloArrow = () => {
  console.log("hello");
};
//gọi hàm
//helloArrow();
setTimeout(helloArrow, 3000);

//function declaration
function xinChao() {
  console.log("Xin chào");
}
setTimeout(xinChao, 3000);

//function expression
let helloExpression = function () {
  console.log("Hi");
};
setTimeout(helloExpression, 3000);

//truyền trực tiêps function vào settimeout
setTimeout(function xinChao() {
  console.log("Xin chào");
}, 3000);

//Sử dụng với tham số
let helloArrow2 = (yourname) => {
  console.log("helo" + yourname);
};
setTimeout(helloArrow2, 3000, "Mậu");

//Hủy quá trình thực hiện hàm
let timeOut = setTimeout(helloArrow2, 3000, "Mậu");
//clearTimeout để hủy thực hiện hamf
clearTimeout(timeOut);

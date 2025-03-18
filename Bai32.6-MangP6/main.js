//Phương thưc sort
//Khi không truyền compareFunction
let M1 = ["b", "a", "c"];
// xem giá trị unicode dùng charCodeAt()
console.log("b".charCodeAt());
//Duyêtj mảng để xem
for (let element of M1) {
  //   console.log(element);
  console.log(`${element} có mã unicode là : ${element.charCodeAt()}`);
}
let sortedM1 = M1.sort();
console.log(sortedM1);

//Th2: P tử có nhiều kí tự: so sánh các ký tự đầu để xếp
// Nếu ký tự giống nhau, so tiếp đến ký tự phía sau,
// mã unicode thấp hơn xếp trước

let M2 = ["baa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

//ví dụ ký tự số (sắp xêps theo unicode nên kq không như mong muốn)
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3);

//So sánh Compare Function
//compareFunction(a,b) trả về một giá tị < 0, a trước b
//compareFunction(a,b) trả về  0, a và b không đổi thứ tự
//compareFunction(a,b) trả về một giá trị > 0, b trước a.

let M4 = [9, 3, 4, 5];
//Sắp xếp tăng dần
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4);

let M5 = [9, 3, 4, 5];
//Sắp xếp giảm dần
let sortedM5 = M5.sort((a, b) => b - a);
console.log(sortedM5);

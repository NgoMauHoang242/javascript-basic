//String js
//1 các cách xuất chuỗi

console.log("");
console.log("");
console.log(``);

//Khởi tạo chuỗi
let s1 = `thơ
ca
văn`;
console.log(s1);
console.log(typeof s1);

//index chuỗi : bắt đầu từ 0
let ten = "Mau";
console.log(ten[2]);

//String length
let s3 = "abcdef";
//kiểm tra chiều dài
console.log(s3.length);

//vd
let mesage = prompt("Mời nhập");
if (mesage.length <= 140) {
  alert(`bạn đã nhập ${mesage.length} kí tự`);
} else {
  alert(`bạn đã nhập quá ${mesage.length - 140} kí tự`);
}

//cắt chuỗi con trong js - slice với substring
//slice cắt chuỗi
let s4 = "2314415141";
//cắt chuỗi dùng slice
let s5 = s4.slice(2, s4.length); // cắt từ index 2 đến 5-1 =4
console.log(s5);
//endIndex nếu không nhập thì cắt đến cuối chuỗi
//hiểu là endIndex = s4.length

//vd chỉ cho phép tin nhắn dài tối đa 20 ký tự,
//nếu quá thì tự cắt xuất chuỗi sau xử lý
let s6 = prompt("Mời nhập chuỗi");
console.log(`Bạn đã nhập ${s6.length} ký tự`);
if (s6.length > 20) {
  console.log(`Bạn đã nhập quá ${s6.length - 20} ký tự`);
  let s7 = s6.slice(0, 20);
  console.log("Chuỗi sau xử lý : " + s7);
}

//code online
console.log("Chuỗi sau xử lý: " + prompt("Mời nhập chuỗi 2").slice(0, 20));

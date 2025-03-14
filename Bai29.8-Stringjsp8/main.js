// Split()
//string chuỗi cần chia
//separator : xác định vị trí thực hiện tách.
//limit (tùy chọn); giới thiệu sl phần tử trong mảng
let student = "Hoa, Lan, Huệ, Mai";
let arr = student.split(",");
console.log(arr);
//Giới hạn phần tử của mảng
let arr2 = student.split(",", 3);
console.log(arr2);
//Nếu nhập vào "" thì sẽ tách rời từng ký tự -> Mảng
let str = "abcdefgh 1234";
let arr3 = str.split("");
console.log(arr3);

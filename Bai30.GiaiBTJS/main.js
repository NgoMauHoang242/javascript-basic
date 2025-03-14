//Nhập chuỗi từ bàn phím
const a = prompt("Nhập vào 1 chuỗi: ");
//Khởi tạo các biến đếm
let lowerCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;

//LẶp qua từng ký tự trong chuỗi và đếm ký tự
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  let char = a[i];
  //Kiểm tra từng giá trị
  if (char >= "a" && char <= "z") {
    lowerCaseCount++;
  } else if (char >= "A" && char <= "Z") {
    upperCaseCount++;
  } else if (char >= "0" && char <= "9") {
    digitCount++;
  } else if (char === " ") {
    spaceCount++;
  } else {
    console.log("Bạn nhập chi chi rứa hầy");
  }
}
//In kết quả
console.log("Số ký tự thường " + lowerCaseCount);
console.log("Số ký tự in hoa " + upperCaseCount);
console.log("Số ký tự số " + digitCount);
console.log("Số khoảng trắng " + spaceCount);

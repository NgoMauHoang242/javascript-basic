// Switch case js
let number = 2;
switch (number % 2) {
  case 0:
    console.log("Số chẵn");
    break;
  case 1:
    console.log("Số lẻ");
    break;
  default:
    console.log("Không phaiar số ");
}

let month = parseInt(prompt("Nhập tháng (1 - 12) :"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng có 30 ngày");
    break;
  case 2:
    console.log("Tháng có 28 hoặc 29 ngày");
    break;
  default:
    console.log("Tháng không tốn tại ");
}

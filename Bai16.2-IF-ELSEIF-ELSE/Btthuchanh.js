//Bài 07
// let a = Number(prompt("Nhập tổng 2 số"));
// let b = Number(prompt("Nhập hiệu 2 số"));

// let x = Number((a + b) / 2);
// let y = Number(x - b);

// console.log("Giá trị của x cần tìm là: " + x);
// console.log("Giá trị của y cần tìm là: " + y);

//Bài 08
// let c = Number(prompt("Nhập chiều cao: "));
// let n = Number(prompt("Nhập cân nặng: "));

// let BMI = Number(n / Math.pow(c, 2));
// console.log("BMI của bạn = " + BMI);

// if (BMI < 15) {
//   console.log("Thân hình quá gầy");
// } else if (BMI >= 15 && BMI < 16) {
//   console.log("Thân hình hơi gầy");
// } else if (BMI > 16 && BMI < 18.5) {
//   console.log("Thân hình hơi gầy");
// } else if (BMI >= 18.5 && BMI < 25) {
//   console.log("Thân hình bình thường");
// } else if (BMI > 25 && BMI < 30) {
//   console.log("Thân hình hơi béo");
// } else if (BMI > 30 && BMI < 35) {
//   console.log("Thân hình béo");
// } else {
//   console.log("Thân hình quá béo");
// }

// Bài 09
// let nam = Number(prompt("Nhập vào năm Dương Lịch"));
// if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//   console.log(nam + "Đây là Năm Nhuận");
// } else {
//   console.log(nam + "Đây là Năm Không Nhuận");
// }

//Bài10
let thang = parseInt(prompt("Nhập tháng ( 1 - 12 )"));

console.log(isNaN(thang));
console.log(!isNaN(thang));
if (!isNaN(thang) && thang >= 1 && thang <= 12) {
  if (thang === 2) {
    let nam = parseInt(prompt("Nhập vào 1 năm: "));

    let checkNamNhuan = (nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0;
    console.log("Check năm nhuận là " + checkNamNhuan);

    if (checkNamNhuan) {
      console.log("tháng 2 năm " + nam + " có 29 ngày ");
    } else {
      console.log("tháng 2 năm " + nam + " có 28 ngày");
    }
  } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    console.log("Tháng " + thang + "có 30 ngày");
  } else {
    console.log("Tháng " + thang + "có 311 ngày");
  }
} else {
  console.log("Tháng không hợp lệ , vui lòng nhập lại từ 1 - 12");
}

//Bài 11

let a = parseFloat(prompt("Nhập a"));
let b = parseFloat(prompt("Nhập b"));
let c = parseFloat(prompt("Nhập c"));

let delta = Math.pow(b, 2) - 4 * a * c;
if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(` Pt có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
} else if (delta === 0) {
  let x1 = -b / (2 * a);
  console.log("Phương trình có nghiệm kép x1 = x2 = " + x1);
} else {
  console.log("Phương trình vô nghiệm");
}

//Bài 12
let month = parseInt(prompt("Nhập vào tháng trong năm"));
if (!isNaN(month) && month >= 1 && month <= 12) {
  if (month === 1 || month === 2 || month === 3) {
    console.log("Tháng " + month + " thuộc Quý 1");
  } else if (month === 4 || month === 5 || month === 6) {
    console.log("Tháng " + month + " thuộc Quý 2");
  } else if (month === 7 || month === 8 || month === 9) {
    console.log("Tháng " + month + " thuộc Quý 3");
  } else if (month === 10 || month === 11 || month === 12) {
    console.log("Tháng " + month + " thuộc Quý 4");
  } else {
    console.log("Tháng không hợp lệ");
  }
}

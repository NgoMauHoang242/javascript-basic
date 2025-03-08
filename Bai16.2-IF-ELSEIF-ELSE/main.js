//If - else if - else
let dtb = Number(prompt("Mời bạn nhập điểm: "));

// Kiểm tra điều kiện

if (dtb <= 10 && dtb >= 8) {
  console.log("Học Sinh Giỏi");
} else if (dtb < 8 && dtb > 6.5) {
  console.log("Học Sinh Khá");
} else if (dtb < 6.5 && dtb >= 5) {
  console.log("Học Sinh Trung Bình");
} else if (dtb < 5 && dtb > 0) {
  console.log("Học sinh Yếu");
} else {
  console.log("Vui lòng nhập lại");
}

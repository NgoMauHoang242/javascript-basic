let dtb = parseFloat(prompt("Nhập vào điểm trung bình: "));
let xepLoai =
  dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung Bình" : "Yếu";
console.log("Xếp loại của học sinh là " + xepLoai);

let a = Number(
  prompt(
    "Chọn cách tìm kiếm: \n1. Tìm theo tên \n2. Tìm theo tác giả \n3. Tìm theo nhà xuất bản \n4. Tìm theo tiêu đề"
  )
);
switch (a) {
  case 1:
    alert("Tìm theo tên");
    break;
  case 2:
    alert("Tìm theo tác giả");
    break;
  case 3:
    alert("Tìm theo nhà xuất bản");
    break;
  case 4:
    alert("Tìm theo tiêu đề ");
    break;
  default:
    alert("Không hợp lệ \n Yêu cầu nhập lại");
    break;
}

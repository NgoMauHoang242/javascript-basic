function calculateAge(inputYear) {
  //Ép kiểu dữ liệu truyền sang Number
  let yearofBirth = Number(inputYear);
  console.log(yearofBirth);
  //Kiếm tra xem năm sinh có phải là số nguyên , và lớn hơn 0?
  if (!Number.isInteger(yearofBirth) || yearofBirth <= 0) {
    alert("Năm sinh không hợp lệ. Năm sinh là số nguyên lớn hơn 0");

    return;
  }
  //Lấy năm hiện tại
  let currentYear = new Date().getFullYear();
  //Tính tuổi
  let age = currentYear - yearofBirth;
  alert(`Tuổi của bạn là ${age} tuổi`);
}

//Nhập năm sinh từ người dùng
let inputYear = prompt("Nhập năm sinh của bạn :");
//Goik hàm tính tuổi
calculateAge(inputYear);
